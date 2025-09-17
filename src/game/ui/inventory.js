window.Inventory = (() => {
  let items = []
  let isOpen = false

  function addToInventory({ name, icon, description, scale,type }) {
    console.log(description)

    if (!items.find(i => i.description === description)) {
      items.push({ name, icon, description, scale, type })
   

      showNotification(`Objet ajouté à l'inventaire`,3)

      if (!CAN_OPEN_INVENTORY) {
        CAN_OPEN_INVENTORY = true; 
      }
     
    }
  }
function showInventoryGrid() {
  if (isOpen) return
  isOpen = true
  IS_GAME_PAUSED = true  // 🧊 Pause the game logic

  const cols = 4
  const rows = 3
  const cellSize = 64
  const padding = 20
  const spacing = 10

  const modalWidth = cols * (cellSize + spacing) - spacing + padding * 2
  const modalHeight = rows * (cellSize + spacing) - spacing + padding * 2

  const origin = center().sub(vec2(modalWidth / 2, modalHeight / 2))

  const overlay = add([
    rect(width(), height()),
    color(0, 0, 0),
    opacity(0.8),
    z(300),
    fixed(),
    "invUI"
  ])

  const box = add([
    rect(modalWidth, modalHeight, { radius: 12 }),
    pos(origin),
    color(30, 30, 40),
    opacity(0.95),
    z(301),
    fixed(),
    "invUI"
  ])
  const descriptionText = add([
  text("", {
    size: 16,
    font: "ussr",
    width: modalWidth - 40,
    lineSpacing: 8,
  }),
  pos(origin.x + 20, origin.y + modalHeight + 10), // below the grid
  color(WHITE),
  z(305),
  fixed(),
  "invUI",
])


  // Draw grid cells
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const slotX = origin.x + padding + c * (cellSize + spacing)
      const slotY = origin.y + padding + r * (cellSize + spacing)

      add([
        rect(cellSize, cellSize, { radius: 6 }),
        pos(slotX, slotY),
        color(60, 60, 80),
        opacity(0.4),
        z(302),
        fixed(),
        "invUI"
      ])
    }
  }

  // Add icons to the grid
items.forEach((item, i) => {
  const row = Math.floor(i / cols)
  const col = i % cols
  const slotX = origin.x + padding + col * (cellSize + spacing)
  const slotY = origin.y + padding + row * (cellSize + spacing)

  const icon = add([
    sprite(item.icon),
    pos(slotX + cellSize / 2, slotY + cellSize / 2),
    anchor("center"),
    scale(item.scale),
    area(),
    z(303),
    fixed(),
    "invUI",
    { item },
  ])

  let hoverEffect = null

icon.onHover(() => {
  if (!hoverEffect) {
    hoverEffect = add([
      rect(cellSize, cellSize, { radius: 6 }),
      pos(slotX, slotY),
      color(255, 255, 255),
      opacity(0.1),
      z(304),
      fixed(),
      "invUI"
    ])
  }

  // 📝 Show item description
  descriptionText.text = item.name + '\n\n' + item.description
})


icon.onHoverEnd(() => {
  if (hoverEffect) {
    destroy(hoverEffect)
    hoverEffect = null
  }

  // 🧹 Clear description
  descriptionText.text = ""
})

})

  // Close with Escape
  onKeyPress("escape", () => {
    if (isOpen) {
      destroyAll("invUI")
      isOpen = false
        IS_GAME_PAUSED = false  // 🔥 Resume the game logic

    }
  })
}


  function clearInventory() {
    items = []
    isOpen = false
  }

  function list() {
    for (let i = 0; i < items.length; i++) {
     
      console.log(items[i])
      
    }
  }


  return {
    add: addToInventory,
    show: showInventoryGrid,
    clear: clearInventory,
    list: list,
    has: (type) => items.some(i => i.type === type)
  }
})()
