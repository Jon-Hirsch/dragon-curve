import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import drawDragonCurve from './drawDragonCurve';
import '../styles/app.scss';

document.addEventListener('DOMContentLoaded', initDragonCurve);

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
    canvas.width = 800;
    canvas.height = 800;
    canvasContainer.appendChild(canvas);

    drawDragonCurve(
      context,
      iterations,
      iterationToTrack,
      colorMode,
      numberOfCurves,
      useAnimation
    );
  };
  callBack(12, 0, 'rainbow', 1, true);
  ReactDOM.render(<App draw={callBack} />, controlsContainer);
}
