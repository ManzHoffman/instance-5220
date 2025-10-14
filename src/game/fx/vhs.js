window.addVHSEffects = function () {

    for (let y = 0; y < height(); y += 4) {
      add([
        rect(width(), 1),
        pos(0, y),
        color(0, 0, 0),
        opacity(0.04),
        fixed(),
        z(100),
      ])
    }
  

    loop(6, () => {
      add([
        rect(width(), height()),
        color(255, 255, 255),
        opacity(0.02),
        fixed(),
        z(99),
        lifespan(0.1),
      ])
    })
  

    loop(0.05, () => {
      for (let i = 0; i < 20; i++) {
        add([
          rect(1, 1),
          pos(rand(0, width()), rand(0, height())),
          color(255, 255, 255),
          opacity(rand(0.01, 0.04)),
          fixed(),
          z(101),
          lifespan(0.1),
        ])
      }
    })
  

    loop(2, () => {
      const y = rand(0, height())
      const h = rand(2, 6)
      const shift = rand(-30, 30)
      const glitchColor = choose([
        rgb(255, 255, 255),
        rgb(180, 220, 255),
        rgb(100, 255, 180),
      ])
  
      add([
        rect(width(), h),
        pos(0, y),
        color(glitchColor.r, glitchColor.g, glitchColor.b),
        opacity(rand(0.08, 0.15)),
        fixed(),
        z(103),
        move(LEFT, shift * rand(0.5, 1.5)),
        lifespan(0.08),
      ])
    })
  

    loop(5, () => {
      add([
        rect(width(), 2),
        pos(rand(-10, 10), rand(0, height())),
        color(255, 255, 255),
        opacity(0.03),
        fixed(),
        z(98),
        lifespan(0.2),
      ])
    })
  }
  