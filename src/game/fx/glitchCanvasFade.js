// glitchCanvas.js

let glitchCanvas = null;
let glitchSketch = null;
let fadeAlpha = 0; // goes from 0 to 255

window.showScreenGlitchFade = function (duration = 2.0) {
  if (glitchCanvas) return; // already active

  glitchSketch = new p5((p) => {
    const canvasWidth = 1800;
    const canvasHeight = 1024;


    p.setup = () => {
      glitchCanvas = p.createCanvas(canvasWidth, canvasHeight);
      glitchCanvas.position(0, 0);
      glitchCanvas.style('pointer-events', 'none');
      glitchCanvas.style('position', 'fixed');
      glitchCanvas.style('z-index', '99999');
      p.noStroke();
    };

p.draw = () => {
  p.clear();

  // 👇 glitch effects first
  const flicker = p.random(20, 60);
  p.fill(flicker, flicker, flicker, 20);
  p.rect(0, 0, canvasWidth, canvasHeight);

  for (let y = 0; y < canvasHeight; y += 4) {
    p.fill(255, p.random(5, 20));
    p.rect(0, y, canvasWidth, 1);
  }

  const shift = p.random(-5, 5);
  p.fill(255, 0, 0, 15);
  p.rect(shift, 0, canvasWidth, canvasHeight);
  p.fill(0, 255, 255, 15);
  p.rect(-shift, 0, canvasWidth, canvasHeight);

  for (let i = 0; i < 6; i++) {
    const x = p.random(canvasWidth);
    const y = p.random(canvasHeight);
    const w = p.random(20, 100);
    const h = p.random(5, 30);
    p.fill(p.random(255), p.random(255), p.random(255), p.random(80));
    p.rect(x, y, w, h);
  }

  // 👇 finally apply the fade
  if (fadeAlpha > 0) {
    p.fill(0, fadeAlpha);
    p.rect(0, 0, canvasWidth, canvasHeight);
  }
};

  });

  // Auto-remove
setTimeout(() => {
  // Start fade to black
  const fadeDuration = 1000; // ms
  const fadeSteps = 60;
  let step = 0;

  const fadeInterval = setInterval(() => {
    step++;
    fadeAlpha = p.map(step, 0, fadeSteps, 0, 255);
    if (step >= fadeSteps) {
      clearInterval(fadeInterval);
      window.removeScreenGlitch(); // remove canvas after fade
    }
  }, fadeDuration / fadeSteps);
}, (duration - 1) * 1000); // start fade 1s before end

};

window.removeScreenGlitch = function () {
  if (glitchCanvas) {
    glitchCanvas.remove();
    glitchCanvas = null;
    glitchSketch = null;
  }
};
