function setupCollisions(player) {


  player.onCollide("memory", (frag) => {
    if (!frag.activated) {
      frag.activated = true



      //showMemoryModal("Fragement de mémoire...\n\n" + frag.message, 5)
      Inventory.add({
        name: "Fragment de mémoire",
        icon: "fragment",
        type: ITEM_FRAGMENT,
        scale: 0.08,                  // small and consistent in the grid
        description: frag.message, 
      })

      //playerCode.push(frag.codePiece)

      frag.opacity = 0.1
      frag.scale = vec2(0.2)
      play("fragment_get")

      frag.destroy() 

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
      description: "Une vieille clé",
      scale: 0.3,
    })

    //showMemoryModal("Fragement de mémoire...\n\n" + frag.message, 5)
    //Inventory.add({ name: "Fragement de mémoire...\n\n" + frag.message, icon: "fragment" })

    //playerCode.push(frag.codePiece)

    //frag.opacity = 0.1

    destroy(key)
    //play("fragment_get")


  })
  player.onCollide("fogTriggerOn", () => {

    if(!IS_FOG_ACTIVATED)
    {
      
    FogBar.create(0)        // barre vide au début
    FogSystem.init()        // instancie les sprites de brouillard

    // brouillard qui monte progressivement
    FogSystem.animateTo(1, 40)   // vers 1 sur 120s (ou 120 unités selon ton usage)

    IS_FOG_ACTIVATED = true;
    }


  })

  player.onCollide("fogTriggerOff", () => {

    if(IS_FOG_ACTIVATED)
    {
        playDeerThoughts([
        { text: getRandomFreyaThought(), duration: 2 },

      ])

      FogSystem.clearSlow(8)   // le brouillard se dissipe sur 8 secondes



    IS_FOG_ACTIVATED = false;
    }

    
  })



  player.onCollide("dialogTriggerFeyra", (t) => {
    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON || IS_FIRST_CIN_OVER || LEVEL_TESTING) return;

    IS_CINEMATIC_MODE_ON = true;

 
      playDeerThoughts([
        { text: "Freya : Salut Fenrir, Je m'apelle Freya", duration: 2 },
        { text: "Freya : Je suis là pour t'aider à retrouver la mémoire !", duration: 2 },
        { text: "Freya : Chaque fragement récupéré contient un indice pour ouvrir un portail.", duration: 4 },
        { text: "Freya : Consulte ton inventaire en appuyant sur i pour les consulter.", duration: 4 },
        { text: "Freya : Fais bien attention au brouillard un peu plus loin !", duration: 3 },
        { text: "Freya : La barre en haut à gauche t'indique sa force.", duration: 3 },
        { text: "Freya : S'il devient trop épais reviens me voir et je t'aiderai", duration: 3 },
      ], () => {

        IS_CINEMATIC_MODE_ON = false;
        IS_FIRST_CIN_OVER = true;



        console.log("All thoughts finished!")
        //showMemoryModal(getControlsDescription(), 4)



      })



    


/*
      wait(2, () => {
         
   
    

      })*/



  })



  player.onCollide("keyTrigger", (t) => {
    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return



    if (!Inventory.has(ITEM_KEY_DOOR_01)) {

      showNotification(NOTIF_ACTIONS.key_missing, 3)
      return;
    }

    const doorClosed = get("doorClosed")[0] 
    doorClosed.use(sprite("doorOpened"))
    IS_CINEMATIC_MODE_ON = true;

showScreenGlitch()
   
        WIND_AMB.stop();
        WALK_NOISE.stop();

      wait(2, () => {
         
        go("outro")
    

      })



  })
  player.onCollide("fuel", (t) => {
   
    Inventory.add({
      name: "Fuel",
      icon: "small_fuel_red",
      type: ITEM_FUEL,
      description: "Un jerrican d'huile à moitié plein.", 
      scale: 0.15,
    })

    destroy(t)



  })

  player.onCollide("laserTrigger", (t) => {
    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return




    showCodePromptModal("Saisissez le code pour activer le pont.\n", () => {

      const laserSwitch = get("laserSwitch")[0]  
      const laserBase = get("laserBase")[0]  
      const laserBaseRevert = get("laserBaseRevert")[0]  
      laserSwitch.use(sprite("blue_switch_pressed"))
      laserBase.use(sprite("laser_blue_on"))
      laserBaseRevert.use(sprite("laser_blue_on"))
      laserBaseRevert.flipX = true;
      const beam = spawnLaserBeam(2630, -85, 26, "right")
      laserEffect.applyFlicker(beam, 0.2, 6) 

      destroy(t)

    })



  })

  const BOUNCE_FORCE = 1000;   
  const BOUNCE_CD    = 0.15;   



  player.onCollide("handleSwitch", (switching) => {

  const handleSwitch = get("handleSwitch")[0]  


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


  if (tramp.cooldown) return;
  tramp.cooldown = true;
  wait(BOUNCE_CD, () => tramp.cooldown = false);


  if (player.vel && player.vel.y >= 0) {
   
    if (typeof player.jump === "function") {
      player.jump(BOUNCE_FORCE);
    } else {
     
      player.vel.y = -BOUNCE_FORCE;
    }

    shake(6);
    play("tramp", { volume: 0.4 });

 
    if (tramp.scale) {
      const baseY = tramp.scale.y;
      tween(baseY, baseY * 0.6, 0.07, v => tramp.scale.y = v);
      wait(0.07, () => tween(tramp.scale.y, baseY, 0.12, v => tramp.scale.y = v));
    }
  }
});





}

