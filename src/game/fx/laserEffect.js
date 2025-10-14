window.laserEffect = (() => {
  function applyFlicker(beam, intensity = 0.2, speed = 5) {
    beam.forEach((segment, i) => {
      segment.onUpdate(() => {
        const t = time() * speed + i * 0.3 
        const flicker = 0.6 + Math.sin(t) * intensity
        segment.opacity = flicker
     
      })
    })
  }

  return {
    applyFlicker,
  }
})()
