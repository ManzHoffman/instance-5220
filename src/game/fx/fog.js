// fogSystem.js

window.FogSystem = (() => {
  let fogAmount = 0        // 0 (clair) → 1 (brouillard dense)
  let initialized = false
  let fogTween = null      // handle vers le tween en cours (si il y en a un)

  function clamp01(v) {
    return Math.max(0, Math.min(1, v))
  }

  function updateBar() {
    if (window.FogBar && typeof FogBar.set === "function") {
      FogBar.set(fogAmount)
    }
  }
function init() {
  if (initialized) return
  initialized = true

  const fogFrames = 6
  const numLayers = 5
  const spritesPerLayer = 8
  const marginX = 400              // marge horizontale hors écran

  const baseBottom = height() * 0.55
  const baseTop    = height() * 0.0001

  for (let l = 0; l < numLayers; l++) {
    const speed = [6, 9, 13, 18][l]
    const scaleBase = 1.3 + l * 0.25

    for (let i = 0; i < spritesPerLayer; i++) {
      const randY = rand(baseTop, baseBottom)

      const fog = add([
        sprite("fogPiece", { frame: randi(0, fogFrames) }),
        pos(rand(-marginX, width() + marginX), randY),  // couvrent plus large
        scale(scaleBase * rand(0.9, 1.2)),
        opacity(0),
        z(900 + l),
        fixed(),
        "fogLayerPiece",
        {
          speed,
          baseY: randY,
          scaleBase,
        },
      ])

      fog.onUpdate(() => {
        const wobble = Math.sin(time() * 0.25 + i) * 6
        fog.pos.y = fog.baseY + wobble
      })
    }
  }

  onUpdate("fogLayerPiece", (fog) => {
    if (fogAmount >= 1) {
      go("lose")
    }

    fog.move(-fog.speed * dt(), 0)

    // wrap plus propre gauche → droite
    if (fog.pos.x < -marginX) {
      fog.pos.x = width() + marginX
      fog.baseY = rand(baseTop, baseBottom)
    }

    const breathing = Math.sin(time() * 0.4) * 0.04
    const maxOpacity = 0.8
    const targetOpacity = fogAmount * maxOpacity + breathing
    fog.opacity = Math.max(0, Math.min(1, targetOpacity))
  })
}


  function set(value) {
    fogAmount = clamp01(value)
    updateBar()
  }
function clearSlow(duration = 10) {
  // stop any current growth tween
  if (fogTween && typeof fogTween.cancel === "function") {
    fogTween.cancel()
    fogTween = null
  }

  // tween from current fogAmount down to 0
  fogTween = tween(
    fogAmount,
    0,
    duration,
    (v) => {
      fogAmount = clamp01(v)
      updateBar()
    }
  )
}
  // FogSystem.animateTo(1, 120) → on garde la même interface
  function animateTo(target, duration) {
    target = clamp01(target)

    // stop l'ancien tween s'il existe
    if (fogTween && typeof fogTween.cancel === "function") {
      fogTween.cancel()
      fogTween = null
    }

    // lancer un nouveau tween à partir de fogAmount actuel
    fogTween = tween(
      fogAmount,
      target,
      duration,
      (v) => {
        fogAmount = v
        updateBar()
      }
    )
  }

  function reduceFog(amount = 0.1) {
    // on réduit la brume en direct
    fogAmount = clamp01(fogAmount - amount)
    updateBar()

    // si tu veux que la montée automatique s'arrête ici :
    if (fogTween && typeof fogTween.cancel === "function") {
      fogTween.cancel()
      fogTween = null
    }

    // OPTION : si tu veux que ça recommence à monter vers 1 après réduction,
    // tu peux relancer un animateTo ici, par ex :
    // animateTo(1, 60)   // remonte vers 1 sur 60s à partir de la nouvelle valeur



    
  }

  function get() {
    return fogAmount
  }

  return {
    init,
    set,
    animateTo,
    get,
    reduceFog,
    clearSlow,   

  }
})()
