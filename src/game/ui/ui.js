    const NOTIF = {
    width: 420,
    height: 70,
    margin: 20,
    gap: 10,           // space between notifs
  };
  
function getControlsDescription() {
  return CONTROLS.map(c => `${c.action} : ${c.key}`).join("\n");
}


function showDeerThought(content, options = {}) {
    const boxWidth = options.width || 600
    const fontSize = options.size || 24
    const yOffset = options.y || height() - 120
    const duration = options.duration || 4



    // Box background
    const box = add([
      rect(boxWidth, 100, { radius: 8 }),
      pos(width() / 2 - boxWidth / 2, yOffset),
      color(0, 0, 0),
      opacity(0),
      z(LAYERS.UI_1),
      fixed(),
      "fadeTarget"
    ])
  
    // Text
    const textBox = add([
      text(content, {
        size: fontSize,
        font: "ussr",
        width: boxWidth - 40,
      }),
      pos(width() / 2 - boxWidth / 2 + 20, yOffset + 20),
      color(255, 255, 255),
      opacity(0),
      z(LAYERS.UI_2),
      fixed(),
      "fadeTarget"
    ])
  
    // Fade in
    tween(box.opacity, 0.5, duration * 0.25, (val) => box.opacity = val)
    tween(textBox.opacity, 1, duration * 0.25, (val) => textBox.opacity = val)
  
    // Wait then fade out
    wait(duration * 0.75, () => {
      tween(box.opacity, 0, duration * 0.25, (val) => box.opacity = val)
      tween(textBox.opacity, 0, duration * 0.25, (val) => textBox.opacity = val)
    })
  
    // Destroy after total duration
    wait(duration + 0.1, () => {
      destroy(box)
      destroy(textBox)
    })
  }
  function layoutNotifs() {
  const boxes = get("ui-notif");              // only the background boxes carry layout
  boxes.forEach((box, i) => {
    const y = NOTIF.margin + i * (NOTIF.height + NOTIF.gap);
    tween(box.pos.y, y, 0.2, v => {
      box.pos.y = v;
      if (box.text) box.text.pos.y = v + 20;  // keep text in sync
    });
  });
}
function showNotification(content, duration = 3) {
  // if (modalIsOpen()) return;  // optional guard from earlier

  const xLeft = width() - NOTIF.width - NOTIF.margin;
  const idx = get("ui-notif").length;
  const y = NOTIF.margin + idx * (NOTIF.height + NOTIF.gap);

  const box = add([
    "ui-notif",
    rect(NOTIF.width, NOTIF.height, { radius: 12 }),
    pos(xLeft, y),
    color(50, 60, 80),
    opacity(0),
    z(LAYERS.NOTIF_1),
    fixed(),
  ]);

  const textBox = add([
    text(content, { size: 22, font: "ussr", width: NOTIF.width - 40, lineSpacing: 8 }),
    pos(xLeft + 20, y + 20),
    color(rgb(220, 240, 255)),
    opacity(0),
    z(LAYERS.NOTIF_2),
    fixed(),
  ]);

  box.text = textBox; // link for layout

  play("notif", { loop: false, volume: 0.3 });
  tween(box.opacity, 0.95, 0.3, v => box.opacity = v);
  tween(textBox.opacity, 1, 0.3, v => textBox.opacity = v);

  wait(duration, () => {
    tween(box.opacity, 0, 0.4, v => box.opacity = v);
    tween(textBox.opacity, 0, 0.4, v => textBox.opacity = v);
    wait(0.5, () => {
      destroy(textBox);
      destroy(box);
      layoutNotifs();  // pull remaining notifs up
    });
  });
}


function showInventoryModal(content, duration = 4) {
  const boxWidth = 600
  const boxHeight = 220
  let closed = false // ✅ track if the modal is already closed

  const boxPos = vec2(center().x - boxWidth / 2, center().y - boxHeight / 2)

  const overlay = add([
    rect(width(), height()),
    color(0, 0, 0),
    opacity(0),
    z(LAYERS.UI_1),
    fixed(),
    "invUI"
  ])

  const box = add([
    rect(boxWidth, boxHeight, { radius: 12 }),
    pos(boxPos),
    color(30, 30, 45),
    opacity(0),
    z(LAYERS.UI_2),
    fixed(),
    "invUI"
  ])

  const textBox = add([
    text(content, {
      size: 24,
      font: "ussr",
      width: boxWidth - 40,
      lineSpacing: 10,
    }),
    pos(boxPos.x + 20, boxPos.y + 30),
    color(WHITE),
    opacity(0),
    z(LAYERS.UI_3),
    fixed(),
    "invUI"
  ])

  const closeBtn = add([
    text("x", { size: 22, font: "ussr" }),
    pos(boxPos.x + 10, boxPos.y + 6),
    color(rgb(180, 180, 200)),
    z(LAYERS.UI_4),
    area(),
    fixed(),
    "invUI"
  ])

  closeBtn.onHover(() => closeBtn.color = rgb(255, 80, 80))
  closeBtn.onHoverEnd(() => closeBtn.color = rgb(180, 180, 200))

  function closeModal() {
    if (closed) return
    closed = true
    IS_GAME_PAUSED = false

    tween(overlay.opacity, 0, 0.4, (val) => overlay.opacity = val)
    tween(box.opacity, 0, 0.4, (val) => box.opacity = val)
    tween(textBox.opacity, 0, 0.4, (val) => textBox.opacity = val)
    tween(closeBtn.opacity, 0, 0.4, (val) => closeBtn.opacity = val)

    wait(0.5, () => {
      destroyAll("invUI")
    })
  }

  closeBtn.onClick(() => {
    closeModal()
  })

  // Fade in
  tween(overlay.opacity, 0.5, 0.4, (val) => overlay.opacity = val)
  tween(box.opacity, 0.95, 0.4, (val) => box.opacity = val)
  tween(textBox.opacity, 1, 0.6, (val) => textBox.opacity = val)
  tween(closeBtn.opacity || 0, 1, 0.4, (val) => closeBtn.opacity = val)

  // Auto-close fallback
  wait(duration, () => {
    closeModal()
  })
}



  function showMemoryModal(content, duration) {
    
    const boxWidth = 600
    const boxHeight = 280
  
    // Dark overlay behind everything
    const overlay = add([
      rect(width(), height()),
      color(0, 0, 0),
      opacity(0),
      z(LAYERS.UI_1),
      fixed(),
    ])
  
    // Modal window
    const box = add([
      rect(boxWidth, boxHeight, { radius: 12 }),
      pos(center().x - boxWidth / 2, center().y - boxHeight / 2),
      color(20, 20, 30),
      opacity(0),
      z(LAYERS.UI_2),
      fixed(),
    ])
  
    // Text content
    const textBox = add([
      text(content, {
        size: 24,
        font: "ussr",
        width: boxWidth - 40,
        lineSpacing: 10,
      }),
      pos(center().x - boxWidth / 2 + 20, center().y - boxHeight / 2 + 30),
      color(WHITE),
      opacity(0),
      z(LAYERS.UI_3),
      fixed(),
    ])


    // Fade in everything
    tween(overlay.opacity, 0.5, 0.4, (val) => overlay.opacity = val)
    tween(box.opacity, 0.95, 0.4, (val) => box.opacity = val)
    tween(textBox.opacity, 1, 0.6, (val) => textBox.opacity = val)
  
    play("fragment_get",{ loop: false,volume: 0.3 })
  
    // Auto-close after duration
    wait(duration, () => {
      tween(overlay.opacity, 0, 0.4, (val) => overlay.opacity = val)
      tween(box.opacity, 0, 0.4, (val) => box.opacity = val)
      tween(textBox.opacity, 0, 0.4, (val) => textBox.opacity = val)
  
      wait(0.5, () => {
        destroy(overlay)
        destroy(box)
        destroy(textBox)
    
      })
    })
  }
  
  function playDeerThoughts(thoughts, onComplete) {
    let timeOffset = 0
  
    for (const t of thoughts) {
      const duration = t.duration || 4
      const delay = t.delay || 1
  
      wait(timeOffset, () => {
        showDeerThought(t.text, {
          duration,
          y: t.y || height() - 120,
        })
      })
  
      timeOffset += duration + delay
    }
  
    // Schedule the callback AFTER the last thought ends
    if (onComplete) {
      wait(timeOffset, () => {
        onComplete()
      })
    }
  }

  
  
