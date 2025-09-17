window.addSnow = function () {
  loop(0.05, () => {
    const size = rand(1, 3)
    const speed = rand(30, 70)
    const drift = rand(-10, 10)

    add([
      rect(size, size),
      pos(rand(0, width()), rand(0, height())),  // fill entire screen

      color(255, 255, 255),
      opacity(rand(0.2, 0.6)),
      move(vec2(drift, 1).unit(), speed),
      lifespan(rand(5, 8)),
      fixed(),
      z(5),
    ])
  })
}
