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
function spawnWanderingMemoryFragment(spots, data, baseScale = 0.7, interval = 2.5) {


  
  if (!spots || spots.length === 0) {
    console.warn("spawnWanderingMemoryFragment: no spots provided")
    return null
  }

  // start at first spot
  const startPos = spots[0]

  const frag = add([
    sprite("fragment"),
    pos(startPos.x, startPos.y),
    scale(baseScale),
    area(),
    opacity(1),             // ✅ start fully visible, numeric value
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

  // breathing
  frag.onUpdate(() => {
    if (!frag.exists()) return
    const s = frag.baseScale + Math.sin(time() * 2) * 0.02
    frag.scale = vec2(s)
  })

  // teleport / blink loop
  const teleportLoop = loop(interval, () => {
    if (!frag.exists() || frag.activated) {
      teleportLoop.cancel()
      return
    }

    // fade out
    tween(frag.opacity, 0, 0.15, (v) => {
      frag.opacity = v
    })

    wait(0.2, () => {
      if (!frag.exists() || frag.activated) return

      // pick a random spot
      const nextSpot = spots[randi(0, spots.length)]
      frag.pos = vec2(nextSpot.x, nextSpot.y)

      // fade in
      tween(frag.opacity, 1, 0.15, (v) => {
        frag.opacity = v
      })
    })
  })

  return frag
}
