import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import drawDragonCurve from './drawDragonCurve';
import '../styles/app.scss';

initDragonCurve();

export default function initDragonCurve() {
  const container = document.getElementById('dragonCurveContainer');
  const controlsContainer = document.createElement('div');
  const canvasContainer = document.createElement('div');
  container.appendChild(canvasContainer);
  container.appendChild(controlsContainer);

  const callBack = (
    iterations,
    iterationToTrack,
    colorMode,
    numberOfCurves,
    useAnimation
  ) => {
    canvasContainer.innerHTML = '';
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    resizeCanvas(canvas);
    canvasContainer.appendChild(canvas);

    drawDragonCurve(
      context,
      canvas.width,
      canvas.height,
      iterations,
      iterationToTrack,
      colorMode,
      numberOfCurves,
      useAnimation
    );
  };
  callBack(12, 0, 'rainbow', 1, true);

  window.addEventListener(
    "resize",
    () => callBack(12, 0, 'rainbow', 1, true)
  );

  ReactDOM.render(<App draw={callBack} />, controlsContainer);
}

function resizeCanvas(canvas) {
  if (window.innerWidth < 375) {
    canvas.width = 300;
    canvas.height = 300;
  } else if (window.innerWidth < 1050) {
    const size = (window.innerWidth / 1050) * 800;
    canvas.width = size;
    canvas.height = size;
  } else {
    canvas.width = 800;
    canvas.height = 800;
  }
}