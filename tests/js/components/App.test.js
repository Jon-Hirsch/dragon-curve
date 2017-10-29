import React from 'react';
import App from '../../../src/js/components/App';

describe('App', () => {
  let shallowWrapper, draw;

  beforeEach(() => {
    draw = jest.fn();
    shallowWrapper = render();
  });

  function render() {
    return shallow(<App draw={draw} />);
  }

  test('should match snapshot', () => {
    expect(render().getElement()).toMatchSnapshot();
  });

  test('click the Draw Curve button calls draw', () => {
    shallowWrapper.find('button').simulate('click');
    expect(draw).toHaveBeenCalledWith(12, 0, 'rainbow', 1, true);
  });

  test('sends default values to draw if the values are not valid numbers', () => {
    shallowWrapper.setState(state => ({
      iterations: 'a',
      iterationToTrack: 'b'
    }));
    shallowWrapper.find('button').simulate('click');
    expect(draw).toHaveBeenCalledWith(12, 0, 'rainbow', 1, true);
  });

  test('updates state when the iterations input changes', () => {
    shallowWrapper
      .find('.dragon-curve-iterations')
      .simulate('change', { target: { value: '10' } });
    expect(shallowWrapper.state().iterations).toEqual('10');
  });

  test('updates state whenthe  colorMode dropdown changes', () => {
    shallowWrapper
      .find('.dragon-curve-color-mode')
      .simulate('change', { target: { value: 'black' } });
    expect(shallowWrapper.state().colorMode).toEqual('black');
  });

  test('updates state when the use animation checkbox changes', () => {
    shallowWrapper
      .find('.dragon-curve-animation-checkbox')
      .simulate('change', { target: { checked: false } });
    expect(shallowWrapper.state().useAnimation).toEqual(false);
  });

  test('updates state when the number of curves input changes', () => {
    shallowWrapper
      .find('.dragon-curve-number-of-curves')
      .simulate('change', { target: { value: '2' } });
    expect(shallowWrapper.state().numberOfCurves).toEqual('2');
  });

  test('updates state when the iteration to track input changes', () => {
    shallowWrapper
      .find('.dragon-curve-iteration-to-track')
      .simulate('change', { target: { value: '2' } });
    expect(shallowWrapper.state().iterationToTrack).toEqual('2');
  });
});
