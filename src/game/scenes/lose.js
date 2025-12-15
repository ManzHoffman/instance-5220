scene("lose", () => {
     addVHSEffects() 
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

    addText(FR.lose.text, 44, COLOR_WHITE, "ussr", "center", width() / 2, height() / 2 -100 );

// 3 seconds until explosion! Runnn!
wait(1, () => {
    addText(FR.lose.title,48,COLOR_WHITE,"ussr","center",width()/2,height()/2+400)
  
    onKeyPress("space", () => {
     

      go("game")
  })})
  
})