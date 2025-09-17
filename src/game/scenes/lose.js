scene("lose", () => {
     // minimal setup
     addVHSEffects() // call the global function
     addAuroras()

    add([
        sprite("background"),
      
        
      ])
  
      add([
        sprite("stars"),
      
        
      ])
      add([
        sprite("mountainsFarAway"),
      
        
      ])
      add([
        sprite("mountains"),
      
        
      ])


    
      add([
        sprite("title"),
        scale(0.5),
        pos(width()/2-240,height()/2-600),
      ])

      
    
      const reindeerDie= add([
        sprite("playerDie"),
        pos(width()/2,height()/2+250),
        scale(1),
        anchor("center"),
        //body(),
        area(),
        "reindeer",
        
      ])
      reindeerDie.flipX = true;

      reindeerDie.play(ANIM_DIE);


// 3 seconds until explosion! Runnn!
wait(1, () => {
    addText(loose.title,48,COLOR_WHITE,"ussr","center",width()/2,height()/2+400)
  
    onKeyPress("space", () => {

      go("game")
  })})
  
})