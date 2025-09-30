function setupCollisions(player) {


  player.onCollide("memory", (frag) => {
    if (!frag.activated) {
      frag.activated = true

      //showMemoryModal("Fragement de mémoire...\n\n" + frag.message, 5)
      Inventory.add({
        name: "Fragment de mémoire",
        icon: "fragment",
        type: ITEM_FRAGMENT,
        description: frag.message, // ✨ Store the message as a description
        scale: 0.07,
      })

      //playerCode.push(frag.codePiece)

      frag.opacity = 0.1
      frag.scale = vec2(0.2)
      play("fragment_get")

      frag.destroy() // if you want it to disappear completely

      //showNotification(NOTIF_ACTIONS.key_missing, 3)

      showScreenGlitch()

      wait(1.2, () => {
        removeScreenGlitch()
      })

    }
  })


  player.onCollide("keyDoor", (key) => {

    console.log("collision with key")


  
    Inventory.add({
      name: "Clé de porte",
      icon: "key",
      type: ITEM_KEY_DOOR_01,
      description: "Une vieille clé", // ✨ Store the message as a description
      scale: 0.3,
    })

    //showMemoryModal("Fragement de mémoire...\n\n" + frag.message, 5)
    //Inventory.add({ name: "Fragement de mémoire...\n\n" + frag.message, icon: "fragment" })

    //playerCode.push(frag.codePiece)

    //frag.opacity = 0.1

    destroy(key)
    //play("fragment_get")


  })

  player.onCollide("hazard", (spike) => {

    console.log("collision with spike")

    blinkOnHit(player)
    //showMemoryModal("Fragement de mémoire...\n\n" + frag.message, 5)
    //Inventory.add({ name: "Fragement de mémoire...\n\n" + frag.message, icon: "fragment" })

    //playerCode.push(frag.codePiece)

    //frag.opacity = 0.1
    Lifebar.update(Lifebar.getValue() - SPIKE_DAMAGE) // 75%

    //play("fragment_get")


  })




  player.onCollide("keyTrigger", (t) => {
    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return



    if (!Inventory.has(ITEM_KEY_DOOR_01)) {

      showNotification(NOTIF_ACTIONS.key_missing, 3)
      return;
    }

    const doorClosed = get("doorClosed")[0]  // or use `.find()` if more than one
    doorClosed.use(sprite("doorOpened"))
    IS_CINEMATIC_MODE_ON = true;

showScreenGlitch()
      //showScreenGlitchFade()
        WIND_AMB.stop();
        WALK_NOISE.stop();

      wait(2, () => {
         
        go("outro")
    

      })


    //showCodePromptModal("Un mot… un code scellé.\nEntrez-le pour avancer.", () => {
    // ✅ Success!
    //  destroy(t)
    // showMemoryModal("🔓 Le chemin s’ouvre devant vous.")
    // You could also play an animation, open a door, or go to the next level
    //  })
    // }
  })
  player.onCollide("fuel", (t) => {
   
    Inventory.add({
      name: "Fuel",
      icon: "small_fuel_red",
      type: ITEM_FUEL,
      description: "Un jerrican d'huile à moitié plein.", // ✨ Store the message as a description
      scale: 0.15,
    })

    destroy(t)



  })

  player.onCollide("laserTrigger", (t) => {
    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return

    // if (!t.activated) {
    //     t.activated = true // prevent repeat activation


    showCodePromptModal("Saisissez le code pour activer le pont.\n", () => {
      // ✅ Success!
      const laserSwitch = get("laserSwitch")[0]  // or use `.find()` if more than one
      const laserBase = get("laserBase")[0]  // or use `.find()` if more than one
      const laserBaseRevert = get("laserBaseRevert")[0]  // or use `.find()` if more than one

      laserSwitch.use(sprite("blue_switch_pressed"))
      laserBase.use(sprite("laser_blue_on"))
      laserBaseRevert.use(sprite("laser_blue_on"))
      laserBaseRevert.flipX = true;
      const beam = spawnLaserBeam(2630, -85, 26, "right")
      laserEffect.applyFlicker(beam, 0.2, 6) // intensity & speed

      destroy(t)
      // showMemoryModal("🔓 Le chemin s’ouvre devant vous.")
      // You could also play an animation, open a door, or go to the next level
    })



  })

  const BOUNCE_FORCE = 1000;   
  const BOUNCE_CD    = 0.15;   



  player.onCollide("handleSwitch", (switching) => {

  const handleSwitch = get("handleSwitch")[0]  // or use `.find()` if more than one


      if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return;

      if(handleSwitch.angle !== -10)
      {

        showNotification("E pour activer le levier !", 3);
      }
      

    
  })
  
player.onCollide("trampolineJump", (tramp) => {
  if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return;

  
  if (!Inventory.has(ITEM_FUEL)) {
    showNotification("Le ressort est rouillé !", 3);
    return;
  }

  // simple cooldown per trampoline
  if (tramp.cooldown) return;
  tramp.cooldown = true;
  wait(BOUNCE_CD, () => tramp.cooldown = false);

  // only bounce if we were falling onto it (optional but feels nicer)
  if (player.vel && player.vel.y >= 0) {
    // Prefer built-in jump() if you have body()
    if (typeof player.jump === "function") {
      player.jump(BOUNCE_FORCE);
    } else {
      // otherwise, kick velocity upward
      player.vel.y = -BOUNCE_FORCE;
    }

    shake(6);
    //play("boing", { volume: 0.6 });

    // squash & stretch (if the trampoline has scale())
    if (tramp.scale) {
      const baseY = tramp.scale.y;
      tween(baseY, baseY * 0.6, 0.07, v => tramp.scale.y = v);
      wait(0.07, () => tween(tramp.scale.y, baseY, 0.12, v => tramp.scale.y = v));
    }
  }
});
  /*
    player.onCollide("codeTrigger", (t) => {
    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return

   // if (!t.activated) {
 //     t.activated = true // prevent repeat activation
  
      showCodePromptModal("Un mot… un code scellé.\nEntrez-le pour avancer.", () => {
        // ✅ Success!
        destroy(t)
        showMemoryModal("🔓 Le chemin s’ouvre devant vous.")
        // You could also play an animation, open a door, or go to the next level
      })
   // }
  })*/




}

