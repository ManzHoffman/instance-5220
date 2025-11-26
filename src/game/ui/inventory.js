window.Inventory = (() => {
  let items = []
  let isOpen = false
  const L = window.LAYERS || {
    UI_1: 1800, //300
    UI_2: 1801, // 301
    UI_3: 1802, // 302
    UI_4: 1803, // 303
        UI_5: 1803, // 304
            UI_6: 1803, // 305
  }

  function addToInventory({ name, icon, description, scale,type }) {
    console.log(description)

    if (!items.find(i => i.description === description)) {
      items.push({ name, icon, description, scale, type })
   

      showNotification(`Objet ajouté à l'inventaire`,3)
/*
      if (!CAN_OPEN_INVENTORY) {
        CAN_OPEN_INVENTORY = true; 
      }*/
     
    }
  }
function showInventoryGrid() {
  if (isOpen || IS_CINEMATIC_MODE_ON) return
  isOpen = true
  IS_GAME_PAUSED = true 

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
    z(L.UI_1),
    fixed(),
    "invUI"
  ])

  const box = add([
    rect(modalWidth, modalHeight, { radius: 12 }),
    pos(origin),
    color(30, 30, 40),
    opacity(0.95),
    z(L.UI_2),
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
  pos(origin.x + 20, origin.y + modalHeight + 10), 
  color(WHITE),
  z(L.UI_6),
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
        z(L.UI_3),
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
    z(L.UI_4),
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
      z(L.UI_5),
      fixed(),
      "invUI"
    ])
  }

 
  descriptionText.text = item.name + '\n\n' + item.description
})


icon.onHoverEnd(() => {
  if (hoverEffect) {
    destroy(hoverEffect)
    hoverEffect = null
  }

 
  descriptionText.text = ""
})

})

  // Close with Escape
  onKeyPress("escape", () => {
    if (isOpen) {
      destroyAll("invUI")
      isOpen = false
        IS_GAME_PAUSED = false 

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
function count(type) {
  return items.filter(i => i.type === type).length
}

  return {
    add: addToInventory,
    show: showInventoryGrid,
    clear: clearInventory,
    list: list,
    has: (type) => items.some(i => i.type === type),
    count:count
  }
})()
