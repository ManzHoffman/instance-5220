function spawnMemoryFragment(x, y, data, baseScale = 0.5) {


    const frag = add([
      sprite("fragment"),
      pos(x, y),
      scale(baseScale),
      area(),
      z(5),
      "memory",
      {
        activated: false,
        message: data.message,
        codePiece: data.codePiece,
        baseScale,
      },
    ])
    frag.use(sprite("orb"))  
    frag.play(ANIM_ORB)  

    frag.onUpdate(() => {
      const s = frag.baseScale + Math.sin(time() * 2) * 0.02
      frag.scale = vec2(s)
     // frag.opacity = 0.6 + Math.sin(time() * 2) * 0.2
    })
  
    return frag
  }