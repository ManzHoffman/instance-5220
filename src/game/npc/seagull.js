function spawnSeagull(posx, posy) {
    const bird = add([
      sprite("seagull"),
      pos(posx, posy),
      scale(0.5),
      area(),
      z(10),
      "seagull",
      {
        startY: posy,
        speed: rand(50, 60),
        dir: 1,
      },
    ])

    
    bird.use(sprite("seagullFly"))  
    bird.play(ANIM_S_FLY)  
    //bird.flipX = flipPlayer 
  
    bird.onUpdate(() => {
      // Glide
      bird.move(bird.dir * bird.speed, 0)
 
      bird.pos.y = bird.startY + Math.sin(time() * 2 + bird.dir) * 4
  
      if (bird.pos.x < camPos().x - width() || bird.pos.x > camPos().x + width() * 2) {
        destroy(bird)
      }
    })
  
    return bird
  }
  