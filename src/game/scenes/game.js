scene("game", (level) => {

 FogBar.create(0)        // barre vide au début
  FogSystem.init()        // instancie les sprites de brouillard


FogSystem.reset();
Inventory.clear();
 WIND_AMB = play("windAmb", { loop: true,volume: 1 });






// define gravity
setGravity(GRAVITY_AMOUNT)





add([
    sprite("backgroundNight"),
    fixed(),
    
  ])
  add([
    sprite("mountains"),
    fixed(),
    
  ])


add([
    sprite("stars"),
  
    fixed(),
  ])

  add([
    sprite("fog"),
      fixed(),
    
  ])


  




  addHelpButton()  

  spawnElements()


  const player = initPlayer(160, 348);
    addAuroras()
    addSnow()
  setupCollisions(player,FR)




 



onKeyPress(controls.openInventory, () => {



    Inventory.show()
  
})

onKeyPress(controls.help, () => {

  if (IS_CINEMATIC_MODE_ON) return;

  showMemoryModal(getControlsDescription(), 4)
})


onKeyPress(controls.activate, () => {
  const handleSwitch = get("handleSwitch")[0]  
  const woodBar = get("darkWood")[0]  

  if (IS_CINEMATIC_MODE_ON || handleSwitch.angle == -10) return;

	if (handleSwitch.pos.dist(player.pos) < 100) {

      showMemoryModal("Quelque chose vient de bouger", 4)
      play("platform", { loop: false });

      handleSwitch.angle = -10;
      woodBar.angle = 0;

		}


})



})
