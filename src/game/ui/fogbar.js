// fogBar.js

window.FogBar = (() => {
  let barBg, barFg
  const maxWidth = 260
  const barHeight = 14
  let current = 0   // 0–1

  function create(initial = 0) {
    destroyAll("fogBarUI")

    const x = 40
    const y = 40

    barBg = add([
      rect(maxWidth, barHeight, { radius: 8 }),
      pos(x, y),
      color(20, 20, 30),
      opacity(0.8),
      z(900),
      fixed(),
      "fogBarUI",
    ])

    barFg = add([
      rect(maxWidth * initial, barHeight, { radius: 6 }),
      pos(x, y),
      color(180, 220, 255),
      opacity(0.95),
      z(901),
      fixed(),
      "fogBarUI",
    ])

    set(initial)
  }

  function set(value) {
    current = Math.max(0, Math.min(1, value))
    if (barFg) {
      barFg.width = maxWidth * current
    }
  }

  function get() {
    return current
  }

  function hide() {
    destroyAll("fogBarUI")
  }

  return {
    create,
    set,
    get,
    hide,
  }
})()
