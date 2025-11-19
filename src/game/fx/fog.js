// fog.js

window.FogSystem = (() => {
  let fogOverlay = null
  let fogLevel = 0 // 0 → 1
  let gustLoop = null

  function initFog() {
    if (fogOverlay) destroy(fogOverlay)

    fogOverlay = add([
      rect(width(), height()),
      pos(0, 0),
      color(200, 220, 235),
      opacity(0),          // contrôlé par fogLevel
      z(50),
      fixed(),
      "fogLayer",
    ])

    // petites nappes de brume qui passent
    gustLoop = loop(0.4, () => {
      if (fogLevel <= 0) return

      const h = rand(40, 120)
      const y = rand(0, height())
      const dir = choose([-1, 1])
      const speed = rand(10, 30) * fogLevel

      add([
        rect(width() * 1.5, h),
        pos(dir > 0 ? -width() * 0.75 : width() * 0.75, y),
        color(210, 230, 240),
        opacity(0.05 + fogLevel * 0.25),
        move(vec2(dir, 0), speed),
        lifespan(rand(4, 8)),
        fixed(),
        z(51),
      ])
    })
  }

  function setFogLevel(level) {
    fogLevel = Math.max(0, Math.min(1, level))

    if (fogOverlay) {
      fogOverlay.opacity = fogLevel * 0.65 // max ~65% d’écran voilé
    }

    if (window.FogBar) {
      FogBar.update(fogLevel)
    }
  }

  // Tween du brouillard vers un niveau donné sur une durée donnée (en secondes)
  function animateFogTo(targetLevel, duration = 5) {
    const start = fogLevel
    tween(start, targetLevel, duration, (val) => {
      setFogLevel(val)
    })
  }

  function cleanupFog() {
    if (fogOverlay) destroy(fogOverlay)
    if (gustLoop && gustLoop.cancel) gustLoop.cancel()
    fogOverlay = null
    gustLoop = null
    fogLevel = 0
  }

  return {
    init: initFog,
    setLevel: setFogLevel,
    animateTo: animateFogTo,
    cleanup: cleanupFog,
    getLevel: () => fogLevel,
  }
})()
