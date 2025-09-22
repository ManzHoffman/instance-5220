scene("settings", () => {
  setBackground(BLACK);

  add([
    text("Paramètres", {
      size: 32,
      font: "ussr",
    }),
    pos(80, 40),
    color(WHITE),
    fixed(),
  ]);



  const startY = 120;

  controlsList.forEach((entry, i) => {
    add([
      text(`${entry.action}: ${entry.key}`, {
        size: 20,
        font: "ussr",
      }),
      pos(100, startY + i * 40),
      color(rgb(220, 240, 255)),
      fixed(),
    ]);
  });

  // Back hint
  add([
    text("Appuyez sur ÉCHAP pour revenir", {
      size: 16,
      font: "ussr",
    }),
    pos(width() - 300, height() - 60),
    color(rgb(150, 150, 150)),
    fixed(),
  ]);

  // Optional background
  add([
    sprite("backgroundNight"),
    fixed(),
    z(-1),
  ]);

  onKeyPress("escape", () => {
    go("menu"); // ⬅️ Return to menu
  });
});
