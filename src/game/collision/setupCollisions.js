// setupCollisions.js



function setupCollisions(player, texts) {



function getRandomFreyaThought() {
  const thoughts = texts.freya.randomThoughts;
  const n = Math.floor(Math.random() * thoughts.length);
  return thoughts[n];
}
  // MEMORY FRAGMENTS
  player.onCollide("memory", (frag) => {

    if (Inventory.count(ITEM_FRAGMENT) === 0) {
      spawnElements(true);
    }

    if (!frag.activated) {
      frag.activated = true;

      Inventory.add({
        name: texts.items.memoryFragmentName,
        icon: texts.items.memoryFragmentIcon,
        type: ITEM_FRAGMENT,
        scale: 0.08, // small and consistent in the grid
        description: frag.message, // stays dynamic
      });

      frag.opacity = 0.1;
      frag.scale = vec2(0.2);
      play("fragment_get");

      frag.destroy();

      showScreenGlitch();
      wait(1.2, () => {
        removeScreenGlitch();
      });
    }
  });

  // KEY PICKUP
  player.onCollide("keyDoor", (key) => {
    console.log("collision with key");

    Inventory.add({
      name: texts.items.keyDoorName,
      icon: texts.items.keyDoorIcon,
      type: ITEM_KEY_DOOR_01,
      description: texts.items.keyDoorDescription,
      scale: 0.3,
    });

    destroy(key);
  });

  // FOG ON
  player.onCollide("fogTriggerOn", () => {
    if (!IS_FOG_ACTIVATED) {
      FogBar.create(0);      // barre vide au début
      FogSystem.init();      // instancie les sprites de brouillard
      FogSystem.animateTo(1, 25); // brouillard qui monte progressivement

      IS_FOG_ACTIVATED = true;
    }
  });

  // FOG OFF
  player.onCollide("fogTriggerOff", () => {
    if (IS_FOG_ACTIVATED) {
      playDeerThoughts([
        { text: getRandomFreyaThought(), duration: 2 },
      ]);

      FogSystem.clearSlow(8); // le brouillard se dissipe

      IS_FOG_ACTIVATED = false;
    }
  });

  // FREYA DIALOG
  let isNearFeyra = false;

  player.onCollideEnd("dialogTriggerFeyra", () => {
    isNearFeyra = false;
    console.log("END COLLAPS");
  });

  player.onCollide("dialogTriggerFeyra", (t) => {
    isNearFeyra = true;

    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return;

    showNotification(texts.notifications.talk_freya, 2);

    onKeyPress(controls.activate, () => {
      const dist = player.pos.dist(t.pos); // you can use dist if needed

      const hasThreeFrag = Inventory.count(ITEM_FRAGMENT) === 3;
      const hasFourFrag = Inventory.count(ITEM_FRAGMENT) === 4;

      if (!isNearFeyra || IS_CINEMATIC_MODE_ON || IS_GAME_PAUSED) return;

      WALK_NOISE.stop();
      IS_CINEMATIC_MODE_ON = true;

      showNpcDialogue({
        npcName: texts.freya.name,
        text: texts.freya.greeting,
        choices: [
          {
            label: texts.freya.options.giveThreeFragments,
            condition: () => hasThreeFrag,
            onSelect: () => {
              playDeerThoughts(texts.freya.dialogues.threeFragments, () => {
                IS_CINEMATIC_MODE_ON = false;

                if (IS_LAST_FR_ACTIVATED) return;

                spawnElements(false, true);
                IS_LAST_FR_ACTIVATED = true;
              });
            },
          },
          {
            label: texts.freya.options.askPortal,
            condition: () => hasFourFrag,
            onSelect: () => {
              playDeerThoughts(texts.freya.dialogues.fourFragments, () => {
                IS_CINEMATIC_MODE_ON = false;
              });
            },
          },
          {
            label: texts.freya.options.dontRemember,
            onSelect: () => {
              playDeerThoughts(texts.freya.dialogues.dontRemember, () => {
                IS_CINEMATIC_MODE_ON = false;
                console.log("All thoughts finished!");
              });
            },
          },
          {
            label: texts.freya.options.fog,
            onSelect: () => {
              playDeerThoughts(texts.freya.dialogues.fog, () => {
                IS_CINEMATIC_MODE_ON = false;
              });
            },
          },
          {
            label: texts.freya.options.lost,
            onSelect: () => {
              playDeerThoughts(texts.freya.dialogues.lost, () => {
                IS_CINEMATIC_MODE_ON = false;
              });
            },
          },
        ],
      });
    });
  });

  // KEY TRIGGER / DOOR
  player.onCollide("keyTrigger", (t) => {
    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return;

    if (!Inventory.has(ITEM_KEY_DOOR_01)) {
      showNotification(texts.notifications.key_missing, 3);
      return;
    }

    const doorClosed = get("doorClosed")[0];
    doorClosed.use(sprite("doorOpened"));
    IS_CINEMATIC_MODE_ON = true;

    showScreenGlitch();

    WIND_AMB.stop();
    WALK_NOISE.stop();

    wait(2, () => {
      go("outro");
    });
  });

  // FUEL PICKUP
  player.onCollide("fuel", (t) => {
    Inventory.add({
      name: texts.items.fuelName,
      icon: texts.items.fuelIcon,
      type: ITEM_FUEL,
      description: texts.items.fuelDescription,
      scale: 0.15,
    });

    destroy(t);
  });

  // LASER TRIGGER / BRIDGE
  player.onCollide("laserTrigger", (t) => {
    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return;

    if (Inventory.count(ITEM_FRAGMENT) === 4) {
      showCodePromptModal(texts.ui.enterBridgeCode, () => {
        const laserSwitch = get("laserSwitch")[0];
        const laserBase = get("laserBase")[0];
        const laserBaseRevert = get("laserBaseRevert")[0];

        laserSwitch.use(sprite("blue_switch_pressed"));
        laserBase.use(sprite("laser_blue_on"));
        laserBaseRevert.use(sprite("laser_blue_on"));
        laserBaseRevert.flipX = true;

        const beam = spawnLaserBeam(2630, -85, 26, "right");
        laserEffect.applyFlicker(beam, 0.2, 6);

        destroy(t);
      });
    } else {
      showNotification(texts.notifications.fragments, 3);
    }
  });

  // CONSTANTS
  const BOUNCE_FORCE = 1000;
  const BOUNCE_CD = 0.15;

  // HANDLE SWITCH
  player.onCollide("handleSwitch", () => {
    const handleSwitch = get("handleSwitch")[0];

    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return;

    if (handleSwitch.angle !== -10) {
      showNotification(texts.ui.leverHint, 3);
    }
  });

  // TRAMPOLINE
  player.onCollide("trampolineJump", (tramp) => {
    if (IS_GAME_PAUSED || IS_CINEMATIC_MODE_ON) return;

    if (!Inventory.has(ITEM_FUEL)) {
      showNotification(texts.ui.rustySpring, 3);
      return;
    }

    if (tramp.cooldown) return;
    tramp.cooldown = true;
    wait(BOUNCE_CD, () => (tramp.cooldown = false));

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
        tween(baseY, baseY * 0.6, 0.07, (v) => (tramp.scale.y = v));
        wait(0.07, () =>
          tween(tramp.scale.y, baseY, 0.12, (v) => (tramp.scale.y = v))
        );
      }
    }
  });
}

