// codePromptModal.js

window.showCodePromptModal = function(promptText, onSuccess, correctCode = "F27") {
  const boxWidth = 600
  const boxHeight = 250
  const MAX_CHARS = 3

  let input = ""

  IS_CINEMATIC_MODE_ON = true;

  const overlay = add([
    rect(width(), height()),
    color(0, 0, 0),
    opacity(0),
    z(200),
    fixed(),
  ])

  const box = add([
    rect(boxWidth, boxHeight, { radius: 12 }),
    pos(center().x - boxWidth / 2, center().y - boxHeight / 2),
    color(20, 20, 30),
    opacity(0),
    z(201),
    fixed(),
  ])

  const prompt = add([
    text(promptText, {
      size: 20,
      font: "ussr",
      width: boxWidth - 40,
      lineSpacing: 10,
    }),
    pos(center().x - boxWidth / 2 + 20, center().y - boxHeight / 2 + 30),
    color(WHITE),
    opacity(0),
    z(202),
    fixed(),
  ])

  const inputText = add([
    text("> ", { size: 28, font: "ussr" }),
    pos(center().x - boxWidth / 2 + 20, center().y - boxHeight / 2 + 160),
    color(rgb(200, 255, 200)),
    opacity(0),
    z(203),
    fixed(),
  ])

  tween(overlay.opacity, 0.5, 0.4, (val) => overlay.opacity = val)
  tween(box.opacity, 0.95, 0.4, (val) => box.opacity = val)
  tween(prompt.opacity, 1, 0.4, (val) => prompt.opacity = val)
  tween(inputText.opacity, 1, 0.6, (val) => inputText.opacity = val)

const updateInput = () => {
  // Show placeholders
  let display = ""
  for (let i = 0; i < MAX_CHARS; i++) {
    display += input[i] ? input[i].toUpperCase() + " " : "_ "
  }
  inputText.text = "> " + display.trim()
}

const cancelModal = () => {
  destroy(overlay)
  destroy(box)
  destroy(prompt)
  destroy(inputText)
  charHandler.cancel()
  backspaceHandler.cancel()
  //enterHandler.cancel()
  escHandler.cancel()
  IS_CINEMATIC_MODE_ON = false
}
const escHandler = onKeyPress("escape", () => {
  cancelModal()
})
const charHandler = onCharInput((ch) => {
  if (input.length < MAX_CHARS && /^[a-zA-Z0-9]$/.test(ch)) {
    input += ch.toUpperCase()
    updateInput()

    if (input.length === MAX_CHARS) {
      // Auto-submit once 3 characters are entered
      if (input === correctCode.toUpperCase()) {
         play("laser",{ loop: false,volume: 0.3 })
        
        cancelModal()
        onSuccess()
      } else {

        play("error",{ loop: false,volume: 0.3 })
        input = ""
        updateInput()
      }
    }
  }
})

const backspaceHandler = onKeyPress("backspace", () => {
  input = input.slice(0, -1)
  updateInput()
})
/*
const enterHandler = onKeyPress("enter", () => {
  if (input.toLowerCase() === correctCode.toLowerCase()) {
    cancelModal()
    play("codeSuccess", { volume: 0.4 })
    onSuccess()
  } else {
    play("error", { volume: 0.3 })
    input = ""
    updateInput()
  }
})*/
}
