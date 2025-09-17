window.triggerScreenGlitch = function(duration = 1.2, fadeout = false) {

  const glitchLayer = add([
    rect(width(), height()),
    pos(0, 0),
    color(255, 255, 255),
    opacity(0),
    z(9999),
    fixed(),
  ])

  const colorBars = []
  const scanlines = []

  const makeColorBar = () => {
    const h = rand(4, 12)
    const y = rand(0, height() - h)
    const bar = add([
      rect(width(), h),
      pos(0, y),
      color(rand(100, 255), rand(100, 255), rand(100, 255)), // RGB fuzz
      opacity(rand(0.05, 0.2)),
      z(10000),
      fixed(),
    ])
    colorBars.push(bar)
  }

  const makeScanline = () => {
    const h = 1
    const y = rand(0, height() - h)
    const line = add([
      rect(width(), h),
      pos(0, y),
      color(255, 255, 255),
      opacity(rand(0.02, 0.05)),
      z(10001),
      fixed(),
    ])
    scanlines.push(line)
  }

  const glitchOverlay = loop(0.05, () => {
    glitchLayer.opacity = rand(0.01, 0.08)
    for (let i = 0; i < 4; i++) makeColorBar()
    for (let i = 0; i < 6; i++) makeScanline()
  })

  const shake = loop(0.03, () => {
    camPos(camPos().add(vec2(rand(-3, 3), rand(-3, 3))))
  })

  // Optional flash
  const flash = loop(rand(0.3, 0.5), () => {
    glitchLayer.color = rgb(rand(100, 255), rand(100, 255), rand(100, 255))
    glitchLayer.opacity = rand(0.05, 0.15)
  })


if(!fadeout){
  wait(duration, () => {
    destroy(glitchLayer)
    glitchOverlay.cancel()
    shake.cancel()
    flash.cancel()
    camPos(center())
    colorBars.forEach(destroy)
    scanlines.forEach(destroy)
  })

}
else
{
wait(duration, () => {
  glitchOverlay.cancel()
  shake.cancel()
  flash.cancel()

  // Fade out glitch overlay
  tween(glitchLayer.opacity, 0, 0.4, (val) => glitchLayer.opacity = val)

  // Then fade screen to black
  wait(0.4, () => {
    destroy(glitchLayer)
    colorBars.forEach(destroy)
    scanlines.forEach(destroy)
    camPos(center())

    const blackOverlay = add([
      rect(width(), height()),
      pos(0, 0),
      color(0, 0, 0),
      opacity(0),
      z(10001),
      fixed(),
    ])

    tween(blackOverlay.opacity, 1, 1, (val) => {
      blackOverlay.opacity = val
    })
  })
})

}

}
