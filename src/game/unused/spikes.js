function spawnSpikes(x, y, scaleValue) {
  const spike = add([
    sprite("smallSpike"),            
    pos(x, y),
    scale(scaleValue),
    area(),                      
    body({ isStatic: true }),    
    z(4),
    "hazard",
    { deadly: true },
  ])
    
    spike.play(ANIM_SP)  

  spike.onUpdate(() => {
 
  })

  return spike
}
