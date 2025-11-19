// fogbar.js

window.FogBar = (() => {
  let barBg, barFg
  let maxWidth = 300
  let height = 18
  let currentValue = 0  // 0 = pas de brouillard, 1 = plein écran

  function create(initialPercent = 0) {
    destroyAll("fogbarUI")

    const x = 40
    const y = 40

    barBg = add([
      rect(maxWidth, height, { radius: 8 }),
      pos(x, y),
      color(10, 15, 25),
      z(200),
      fixed(),
      opacity(0.7),
      "fogbarUI",
    ])

    barFg = add([
      rect(maxWidth * initialPercent, height, { radius: 6 }),
      pos(x, y),
      color(180, 200, 220), // gris-bleu brumeux
      z(201),
      fixed(),
      opacity(0.9),
      "fogbarUI",
    ])

    currentValue = initialPercent
  }

  function update(percent) {
    currentValue = Math.max(0, Math.min(1, percent))
    if (barFg) {
      barFg.width = maxWidth * currentValue
    }
  }

  function setValue(current, max) {
    update(current / max)
  }

  function getValue() {
    return currentValue
  }

  function hide() {
    destroyAll("fogbarUI")
  }

  return {
    create,
    update,
    setValue,
    getValue,
    hide,
  }
})()
