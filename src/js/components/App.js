import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iterations: '12',
      iterationToTrack: '0',
      colorMode: 'rainbow',
      numberOfCurves: 1,
      useAnimation: true
    };

    this.drawCurve = this.drawCurve.bind(this);
  }

  drawCurve() {
    const {
      iterations,
      iterationToTrack,
      colorMode,
      numberOfCurves,
      useAnimation
    } = this.state;

    this.props.draw(
      isNaN(iterations) ? 12 : +iterations,
      isNaN(iterationToTrack) ? 0 : +iterationToTrack,
      colorMode,
      numberOfCurves,
      useAnimation
    );
  }

  updateField(field, value) {
    this.setState(state => ({
      [field]: value
    }));
  }

  render() {
    return (
      <div className="dragon-curve-controls">
        <div className="button-container">
          <button onClick={this.drawCurve}>Draw Curve</button>
        </div>
        <div className="dragon-curve-controls-row">
          <div>
            <label>
              Iterations:{' '}
              <input
                type="text"
                value={this.state.iterations}
                className="dragon-curve-iterations"
                onChange={event =>
                  this.updateField('iterations', event.target.value)}
              />
            </label>
          </div>
          <div>
            Color Mode:{' '}
            <select
              value={this.state.colorMode}
              className="dragon-curve-color-mode"
              onChange={event =>
                this.updateField('colorMode', event.target.value)}
            >
              <option value="rainbow">Rainbow</option>
              <option value="contrast">Contrast</option>
              <option value="black">Black</option>
            </select>
          </div>
          <div>
            <label>
              Use Animation:{' '}
              <input
                type="checkbox"
                checked={this.state.useAnimation}
                className="dragon-curve-animation-checkbox"
                onChange={event =>
                  this.updateField('useAnimation', event.target.checked)}
              />
            </label>
          </div>
        </div>
        <div className="dragon-curve-controls-row">
          <div>
            Number of Curves:{' '}
            <select
              value={this.state.numberOfCurves}
              className="dragon-curve-number-of-curves"
              onChange={event =>
                this.updateField('numberOfCurves', event.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div>
            <label>
              Iteration to Track{' '}
              <input
                type="text"
                value={this.state.iterationToTrack}
                className="dragon-curve-iteration-to-track"
                onChange={event =>
                  this.updateField('iterationToTrack', event.target.value)}
              />
            </label>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  draw: PropTypes.func.isRequired
};
