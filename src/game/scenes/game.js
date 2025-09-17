scene("game", (level) => {

 WIND_AMB = play("windAmb", { loop: true,volume: 1 });
 const hasAlreadyPlayed = StorageUtils.load(HAS_ALREADY_PLAYED)

if (!LEVEL_TESTING || hasAlreadyPlayed == null || hasAlreadyPlayed == false ) 
{

     IS_CINEMATIC_MODE_ON = true;
}



// define gravity

setGravity(GRAVITY_AMOUNT)

Lifebar.create(1) // full bar





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

 
if(hasAlreadyPlayed == null || hasAlreadyPlayed == false ){

playDeerThoughts([
    { text: "Il fait froid. Mais ce n’est pas le froid que je connais.", duration: 3},
    //{ text: "Je marche. C’est tout ce que je sais faire.", duration: 4 },
    { text: "Le ciel est différent.", duration: 2 },
    { text: "Je ne me souviens de rien.", duration: 2 },
    { text: "Mais quelque chose... m’attend.", duration: 3 },
    { text: "Alors je continue.", duration: 2 },
  ], () => {
    // 🎯 Trigger next step here:
    // e.g., unlock movement, start snowstorm, fade in next zone
    IS_CINEMATIC_MODE_ON = false;
  

  
    console.log("All thoughts finished!")
    showMemoryModal(CONTROLS.leftAndRight, 4)

    StorageUtils.save(HAS_ALREADY_PLAYED, true)

  })

}
onKeyPress(controls.openInventory, () => {

  if (CAN_OPEN_INVENTORY) {

    Inventory.show()
  }
})


})
