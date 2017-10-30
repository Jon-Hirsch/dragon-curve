export default function dragonCurveScript(
  context,
  iterations,
  iterationToTrack,
  colorMode,
  numCurves,
  useAnimation
) {
  context.fillStyle = colorMode === 'black' ? '#FFF' : '#202020';
  context.fillRect(0, 0, 800, 800);
  context.lineWidth = 1;
  let startAngle = 0;

  for (let i = 0; i < numCurves; i++) {
    drawCurve(
      context,
      iterations,
      startAngle,
      useAnimation,
      iterationToTrack,
      colorMode
    );
    startAngle += 90;
  }
}

function drawCurve(
  context,
  iterations,
  angle,
  useAnimation,
  iterationToTrack,
  colorMode
) {
  let x = 400;
  let y = 400;
  let currentColor = 0;
  let sequence = getSequence(iterations);
  let colors = getColors(iterations, colorMode);
  let trackAllIterations = !iterationToTrack;
  iterationToTrack = trackAllIterations ? 1 : iterationToTrack;
  let width = 700;
  width /= 1.5;
  for (let i = 0; i <= iterations; i++) {
    width /= 1.41421;
  }

  if (!useAnimation) {
    drawSequence();
  } else {
    animateSequence(0);
  }

  function drawSequence() {
    for (let i = 0; i < sequence.length; i++) {
      updateColors(i);
      rotateAndDraw(sequence[i] === '0' ? -90 : 90);
    }
    context.stroke();
  }

  function animateSequence(index) {
    if (index < sequence.length) {
      updateColors(index);
      animate(sequence[index] === '0' ? -90 : 90, index);
    }
  }

  function animate(rotation, index) {
    window.requestAnimationFrame(function() {
      context.stroke();
      rotateAndDraw(rotation);
      animateSequence(index + 1);
    });
  }

  function updateColors(index) {
    const lengthOfCurrentIteration = Math.pow(2, iterationToTrack || 1) - 1;
    if (index % lengthOfCurrentIteration === 0) {
      context.stroke();
      context.closePath();
      context.beginPath();
      currentColor = (currentColor + 1) % colors.length;
      context.strokeStyle = colors[currentColor];

      if (trackAllIterations) {
        iterationToTrack++;
      }
    }
  }

  function rotateAndDraw(rotation) {
    angle += rotation;
    angle = (angle + 360) % 360;
    let deltaX = x;
    let deltaY = y;

    if (angle === 0) {
      deltaX += width;
    } else if (angle === 90) {
      deltaY += width;
    } else if (angle === 180) {
      deltaX -= width;
    } else {
      deltaY -= width;
    }
    context.moveTo(x, y);
    context.lineTo(deltaX, deltaY);
    x = deltaX;
    y = deltaY;
  }
}

function getColors(iterations, colorMode) {
  if (colorMode === 'black') return [].fill('#000', iterations);
  let colors = [];
  let frequency = 0.6;
  for (let index = 0; index < iterations; index++) {
    const i =
      colorMode === 'contrast' && index % 2 ? iterations - index : index;
    let r = Math.floor(Math.sin(frequency * i) * 127 + 128).toString(16, 2);
    let g = Math.floor(Math.sin(frequency * i + 2) * 127 + 128).toString(16, 2);
    let b = Math.floor(Math.sin(frequency * i + 4) * 127 + 128).toString(16, 2);

    r = r.length < 2 ? '0' + r : r.substr(0, 2);
    g = g.length < 2 ? '0' + g : g.substr(0, 2);
    b = b.length < 2 ? '0' + b : b.substr(0, 2);

    colors.push('#' + r + g + b);
  }
  return colors;
}

function getSequence(iterations) {
  let sequence = '1';
  for (let i = 1; i < iterations; i++) {
    let middle = Math.ceil(sequence.length / 2) - 1;
    sequence +=
      '1' + sequence.substr(0, middle) + '0' + sequence.substr(middle + 1);
  }
  return sequence;
}
