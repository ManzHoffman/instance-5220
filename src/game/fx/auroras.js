window.addAuroras = function () {


const aurora = add([
  sprite("borealisPurple"),
  pos(-20, 110),
  z(10),
  { speed: 5 }, 
  fixed(),
])

const aurora_top = add([
  sprite("borealis"),
  pos(-350, -290),
  z(15),
  { speed: 5 }, 
  fixed(),
])



onUpdate(() => {
  aurora.opacity = 0.5 + Math.sin(time() * 0.8) * 0.2
  aurora.move(Math.sin(time() * 0.5) * 10, 0)

  aurora_top.opacity = 0.2 + Math.sin(time() * 0.8) * 0.2
  aurora_top.move(Math.sin(time() * 0.5) * 10, 0)
})


}