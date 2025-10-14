const changeColor = ((obj, colorToPut) => {obj.color = colorToPut })

function addText(textMain, size, color, fontType, align, posx, posy) {
  const textToEdit = add([
    text(textMain, {
      size: size,
      font: fontType,
    }),
    anchor(align),
    pos(posx, posy),
    fixed(),
    z(100), 
  ]);

  changeColor(textToEdit, color);

  return textToEdit; 
}