// laserEffect.js

window.laserEffect = (() => {
  function applyFlicker(beam, intensity = 0.2, speed = 5) {
    beam.forEach((segment, i) => {
      segment.onUpdate(() => {
        const t = time() * speed + i * 0.3 // slight offset per segment
        const flicker = 0.6 + Math.sin(t) * intensity
        segment.opacity = flicker
        // Optionally vary scale or tint:
        // segment.scale = vec2(0.4 + Math.sin(t) * 0.01)
        // segment.color = rgb(100 + Math.sin(t) * 50, 100, 255)
      })
    })
  }

  return {
    applyFlicker,
  }
})()
