// itemIdleAnimation.js

window.itemIdleAnimation = function (item, {
  floatAmount = 5,
  scaleAmount = 0.05,
  speed = 2
} = {}) {
  const baseY = item.pos.y
  const baseScale = item.scale.clone()

  item.onUpdate(() => {
    const t = time() * speed
    item.pos.y = baseY + Math.sin(t) * floatAmount
    const s = 1 + Math.sin(t) * scaleAmount
    item.scale = baseScale.scale(s)
  })
}
