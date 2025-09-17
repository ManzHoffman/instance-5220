
function spawnLaserBeam(x, y, lengthInTiles, direction = "down") {
  const segmentSize = 30 // height or width of one segment
  const segmentName = "blue_laser" // your sprite name
  const beam = []

  for (let i = 0; i < lengthInTiles; i++) {
    const posX = direction === "right" ? x + i * segmentSize : x
    const posY = direction === "down" ? y + i * segmentSize : y

    const segment = add([
      sprite(segmentName),
      pos(posX, posY),
      area(),
      body({ isStatic: true }),
      z(10),
        scale(0.4),

      "laser",
      { beamIndex: i },
    ])

    beam.push(segment)
  }

  return beam
}