scene("game", (level) => {


 WIND_AMB = play("windAmb", { loop: true,volume: 1 });


if (!LEVEL_TESTING  ) 
{

     IS_CINEMATIC_MODE_ON = true;
}



// define gravity
setGravity(GRAVITY_AMOUNT)

Lifebar.create(1) 





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
/*
  add([
    sprite("fog"),
      fixed(),
    
  ])
*/

  

/*
  add([
    sprite("ground"),
    pos(0,350),dd
  
  ])

*/

 





  spawnElements()


  const player = initPlayer(160, 348);
    addAuroras()
    addSnow()
  setupCollisions(player)



playDeerThoughts([
    { text: "Il fait froid. Mais ce n’est pas le froid que je connais.", duration: 3},
    //{ text: "Je marche. C’est tout ce que je sais faire.", duration: 4 },
    { text: "Le ciel est différent.", duration: 2 },
    { text: "Je ne me souviens de rien.", duration: 2 },
    { text: "Mais quelque chose... m’attend.", duration: 3 },
    { text: "Alors je continue.", duration: 2 },
  ], () => {

    IS_CINEMATIC_MODE_ON = false;
    

  

  
    console.log("All thoughts finished!")
    showMemoryModal(getControlsDescription(), 4)



  })


 



onKeyPress(controls.openInventory, () => {

  if (CAN_OPEN_INVENTORY) {

    Inventory.show()
  }
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
