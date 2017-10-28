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

  const callBack = () => {
    drawDragonCurve(canvasContainer, 14, 0, 'rainbow', 4, false)
  };
  callBack();
  ReactDOM.render(<App callBack={callBack} />, controlsContainer);
}
