// Pure Kaplay / Kaboom glitch, no p5
window.triggerSimpleGlitch = function (duration = 0.4) {

  const originalCamPos   = camPos()
  const originalCamScale = camScale()
  const originalCamRot   = camRot()

  const blocks = []

  function spawnBlockGlitch() {
    const w = rand(40, 160)
    const h = rand(10, 60)
    const x = rand(0, width() - w)
    const y = rand(0, height() - h)

    const b = add([
      rect(w, h),
      pos(x, y),
      color(rand(120, 255), rand(120, 255), rand(120, 255)),
      opacity(rand(0.1, 0.25)),
      z(9999),
      fixed(),
      lifespan(rand(0.05, 0.15), { fade: 0.05 }),
    ])

    blocks.push(b)
  }

  // Main glitch loop: shake + a bit of zoom/rotation + spawn blocks
  const glitchLoop = loop(0.03, () => {
    // Camera shake + slight zoom + angle
    camPos(originalCamPos.add(vec2(rand(-4, 4), rand(-4, 4))))
    camScale(vec2(1 + rand(-0.03, 0.06)))
    camRot(originalCamRot + rand(-0.06, 0.06))

    // A few noisy rectangles
    for (let i = 0; i < 4; i++) {
      spawnBlockGlitch()
    }
  })

  // Occasional color flash overlay
  const flashOverlay = add([
    rect(width(), height()),
    pos(0, 0),
    color(255, 255, 255),
    opacity(0),
    z(10000),
    fixed(),
  ])

  const flashLoop = loop(0.12, () => {
    flashOverlay.color = rgb(rand(100, 255), rand(100, 255), rand(100, 255))
    flashOverlay.opacity = rand(0.05, 0.18)
  })

  // End of glitch
  wait(duration, () => {
    glitchLoop.cancel()
    flashLoop.cancel()

    camPos(originalCamPos)
    camScale(originalCamScale)
    camRot(originalCamRot)

    flashOverlay.opacity = 0
    destroy(flashOverlay)

    blocks.forEach(b => b && b.exists() && destroy(b))
  })
}
