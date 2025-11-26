
// npcDialog.js

window.showNpcDialogue = function (config) {
  const {
    npcName = "???",
    text: npcText = "",
    choices = [],              // [{ label: "...", onSelect: () => {} }, ...]
    onClose = null,
  } = config || {}

  if (!choices.length) return

  // Pause controls / gameplay if you use these flags
  if (typeof IS_GAME_PAUSED !== "undefined") IS_GAME_PAUSED = true
  if (typeof IS_CINEMATIC_MODE_ON !== "undefined") IS_CINEMATIC_MODE_ON = true

  const L = window.LAYERS || {
    UI_1: 1800,
    UI_2: 1801,
    UI_3: 1802,
    UI_4: 1803,
  }

  const boxWidth = 600
  const boxHeight = 340
  const boxX = center().x - boxWidth / 2
  const boxY = 120




  // ---- overlay ----
  const overlay = add([
    rect(width(), height()),
    color(0, 0, 0),
    opacity(0.5),
    fixed(),
    z(L.UI_1),
    "npcUI",
  ])

  // ---- main box ----
  const box = add([
    rect(boxWidth, boxHeight, { radius: 12 }),
    pos(boxX, boxY),
    color(20, 20, 30),
    opacity(0.98),
    fixed(),
    z(L.UI_2),
    "npcUI",
  ])

  // we’ll store all texts created via addText so we can destroy them
  const textNodes = []

  // helper to wrap addText and push in array
  function makeText(txt, size, colorVal, align, x, y) {
    const t = addText(txt, size, colorVal, "ussr", align, x, y)
    textNodes.push(t)
    return t
  }

  // ---- NPC name ----
  const nameText = makeText(
    npcName,
    26,
    rgb(230, 230, 255),
    "topleft",
    boxX + 20,
    boxY + 20
  )
  nameText.z = L.UI_3

  // ---- main dialogue text (you can use \n for line breaks) ----
  const mainText = makeText(
    npcText,
    20,
    WHITE,
    "topleft",
    boxX + 20,
    boxY + 60
  )
  mainText.z = L.UI_3

  // ---- close button (click area + "x" label) ----
  const closeArea = add([
    rect(30, 30),
    pos(boxX + boxWidth - 40, boxY + 10),
    color(0, 0, 0, 0),
    opacity(0),
    fixed(),
    area(),
    z(L.UI_3),
    "npcUI",
  ])

  const closeLabel = makeText(
    "x",
    22,
    rgb(180, 180, 200),
    "center",
    boxX + boxWidth - 25,
    boxY + 25
  )
  closeLabel.z = L.UI_4

  closeArea.onHover(() => {
    closeLabel.color = rgb(255, 80, 80)
  })
  closeArea.onHoverEnd(() => {
    closeLabel.color = rgb(180, 180, 200)
  })

  let closed = false

  function cleanup() {
    if (closed) return
    closed = true

    destroyAll("npcUI")
    textNodes.forEach(t => t && t.exists() && destroy(t))

    if (typeof IS_GAME_PAUSED !== "undefined") IS_GAME_PAUSED = false
    //if (typeof IS_CINEMATIC_MODE_ON !== "undefined") IS_CINEMATIC_MODE_ON = false

    if (escHandler && escHandler.cancel) {
      escHandler.cancel()
     // IS_CINEMATIC_MODE_ON = false;
    }


    onClose && onClose()
  }

  closeArea.onClick(() => {
    cleanup()
    IS_CINEMATIC_MODE_ON = false;
  })

  // ---- choices buttons ----
  const optionHeight = 40
  const optionMarginTop = 120
  const optionGap = 12

  const visibleChoices = choices.filter(c => !c.condition || c.condition())


  
visibleChoices.forEach((choice, i) => {
    const y = boxY + optionMarginTop + i * (optionHeight + optionGap)

    const btn = add([
      rect(boxWidth - 80, optionHeight, { radius: 6 }),
      pos(boxX + 40, y),
      color(0, 0, 0),
      opacity(0.85),
      fixed(),
      area(),
      z(L.UI_2),
      "npcUI",
    ])

    const label = makeText(
      choice.label,
      18,
      WHITE,
      "left",
      boxX + 50,
      y + optionHeight / 2
    )
    label.z = L.UI_3

    btn.onHover(() => {
      btn.opacity = 1
      btn.color = rgb(40, 50, 80)
      label.color = rgb(200, 230, 255)
    })

    btn.onHoverEnd(() => {
      btn.opacity = 0.85
      btn.color = rgb(0, 0, 0)
      label.color = WHITE
    })

    btn.onClick(() => {
      const cb = choice.onSelect
      cleanup()
      cb && cb()
    })
  })
  // ---- ESC key to close ----
  const escHandler = onKeyPress("escape", () => {
    cleanup()
  })

  return { close: cleanup }
}
