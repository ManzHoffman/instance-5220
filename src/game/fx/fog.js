// fogSystem.js

window.FogSystem = (() => {
  let fogAmount = 0        // 0 (clair) → 1 (brouillard dense)
  let initialized = false
  const layers = []

  function init() {
    if (initialized) return
    initialized = true

    const fogFrames = 6          // fog.png = 6 morceaux
    const numLayers = 3          // profondeur de brouillard
    const spritesPerLayer = 6
    const baseY = height() * 0.55

    for (let l = 0; l < numLayers; l++) {
      const layer = []
      const speed = [6, 11, 18][l]          // chaque couche bouge différemment
      const yOffset = l * 40
      const scaleBase = 1.2 + l * 0.2

      for (let i = 0; i < spritesPerLayer; i++) {
        const fog = add([
          sprite("fogPiece", { frame: randi(0, fogFrames) }),
          pos(rand(0, width()), baseY + yOffset + rand(-25, 25)),
          scale(scaleBase),
          opacity(0),           // on pilotera ça avec fogAmount
          z(1000 + l),            // devant le décor, derrière le HUD
          fixed(),
          "fogLayerPiece",
          {
            speed,
            baseY: baseY + yOffset,
            scaleBase,
          },
        ])

        layer.push(fog)
      }

      layers.push(layer)
    }

    // Update de tous les morceaux de brouillard
    onUpdate("fogLayerPiece", (fog) => {
      // déplacement horizontal doux
      fog.move(-fog.speed * dt(), 0)

      // recoller à droite quand on sort de l’écran
      if (fog.pos.x < -400) {
        fog.pos.x = width() + rand(0, 200)
        fog.pos.y = fog.baseY + rand(-25, 25)
        fog.frame = randi(0, 6)
      }

      // “respiration” légère
      const breathing = Math.sin(time() * 0.4) * 0.04
      const maxOpacity = 0.6

      const targetOpacity =
        fogAmount * maxOpacity + breathing

      fog.opacity = Math.max(0, Math.min(1, targetOpacity))
    })
  }

  function set(value) {
    fogAmount = Math.max(0, Math.min(1, value))

    // on synchronise la barre de brouillard si elle existe
    if (window.FogBar && typeof FogBar.set === "function") {
      FogBar.set(fogAmount)
    }
  }

  // garde ta signature : FogSystem.animateTo(1, 120)
  // ici `duration` = temps en SECONDES (si tu veux en frames, tu fais duration / 60)
  function animateTo(target, duration) {
    target = Math.max(0, Math.min(1, target))

    tween(
      fogAmount,
      target,
      duration,
      (v) => {
        fogAmount = v
        if (window.FogBar && typeof FogBar.set === "function") {
          FogBar.set(v)
        }
      }
    )
  }

  function get() {
    return fogAmount
  }

  return {
    init,
    set,
    animateTo,
    get,
  }
})()
