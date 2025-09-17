function spawnSpikes(x, y, scaleValue) {
  const spike = add([
    sprite("smallSpike"),            // your spike sprite name
    pos(x, y),
    scale(scaleValue),
    area(),                      // allows collision detection
    body({ isStatic: true }),    // static: it doesn't fall
    z(4),
    "hazard",
    { deadly: true },
  ])
    
    spike.play(ANIM_SP)  

  spike.onUpdate(() => {
 
  })

  return spike
}
