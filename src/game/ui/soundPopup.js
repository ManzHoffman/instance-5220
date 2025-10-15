window.showSoundPopup = function () {
  const widthBox = 480
  const heightBox = 180
  const posTopLeft = vec2(center().x - widthBox / 2, center().y - heightBox / 2)

  // Overlay
  const overlay = add([
    rect(width(), height()),
    color(0, 0, 0),
    opacity(0.85),
    z(500),
    fixed(),
    "popupUI",
  ])

  // Box
  const box = add([
    rect(widthBox, heightBox, { radius: 10 }),
    pos(posTopLeft),
    color(30, 30, 45),
    opacity(0.95),
    z(501),
    fixed(),
    "popupUI",
  ])

  // Text
  const textBox = add([
    text("Cliquez pour activer le son", {
      size: 28,
      font: "ussr",
      width: widthBox - 40,
      lineSpacing: 8,
    }),
    pos(posTopLeft.x + 40, posTopLeft.y + 50),
    color(rgb(220, 240, 255)),
    z(502),
    fixed(),
    "popupUI",
  ])

  // Button
  const btnWidth = 160
  const btnHeight = 48
  const btnX = center().x - btnWidth / 2
  const btnY = posTopLeft.y + heightBox - btnHeight - 20

  const btn = add([
    rect(btnWidth, btnHeight, { radius: 8 }),
    pos(btnX, btnY),
    color(50, 70, 100),
    area(),
    z(503),
    fixed(),
    "popupUI",
  ])

  const btnText = add([
    text("ACTIVER", { size: 22, font: "ussr" }),
    anchor("center"),
    pos(btnX + btnWidth / 2, btnY + btnHeight / 2),
    color(rgb(220, 240, 255)),
    z(504),
    fixed(),
    "popupUI",
  ])

  btn.onHover(() => {
    btn.color = rgb(70, 100, 140)
    btnText.color = rgb(255, 255, 255)
  })
  btn.onHoverEnd(() => {
    btn.color = rgb(50, 70, 100)
    btnText.color = rgb(220, 240, 255)
  })

  // Click handler → unlock audio context
  btn.onClick(() => {
    try {
      if (typeof AudioContext !== "undefined") {
        const ctx = new AudioContext()
        ctx.resume()
      }
      play("menu", { loop: true, volume: 0.1 }) // start background music
    } catch (e) {
      console.warn("Audio context unlock failed", e)
    }

    destroyAll("popupUI")
  })
}
