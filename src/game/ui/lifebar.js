window.Lifebar = (() => {
  let barBg, barFg, maxWidth = 300, height = 24
  let currentValue = 1

  function createLifebar(initialPercent = 1) {
    destroyAll("lifebarUI")

    const x = 40
    const y = 40

    barBg = add([
      rect(maxWidth, height, { radius: 8 }),
      pos(x, y),
      color(20, 20, 30),
      z(200),
      fixed(),
      opacity(0.8),
      "lifebarUI"
    ])

    barFg = add([
      rect(maxWidth * initialPercent, height, { radius: 6 }),
      pos(x, y),
      color(200, 40, 60),
      z(201),
      fixed(),
      opacity(0.9),
      "lifebarUI"
    ])

    currentValue = initialPercent
  }

  function updateLifebar(percent) {
    currentValue = Math.max(0, Math.min(1, percent))
    barFg.width = maxWidth * currentValue
  }

  function setValue(current, max) {
    updateLifebar(current / max)
  }

  function hide() {
    destroyAll("lifebarUI")
  }

  return {
    create: createLifebar,
    update: updateLifebar,
    setValue,
    hide,
    getValue: () => currentValue, // ✅ new getter
  }
})()
