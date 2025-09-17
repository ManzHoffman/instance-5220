function blinkOnHit(item, duration = 0.6, blinkRate = 0.1) {
  let timePassed = 0
  const interval = setInterval(() => {
    item.hidden = !item.hidden
    timePassed += blinkRate
    if (timePassed >= duration) {
      clearInterval(interval)
      item.hidden = false // Ensure visible at end
    }
  }, blinkRate * 1000)
}
