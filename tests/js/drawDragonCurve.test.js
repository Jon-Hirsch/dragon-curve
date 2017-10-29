import drawDragonCurve from '../../src/js/drawDragonCurve';

describe('drawDragonCurve', () => {
  const context = {
    lineTo: jest.fn(),
    moveTo: jest.fn(),
    closePath: jest.fn(),
    beginPath: jest.fn(),
    stroke: jest.fn(),
    fillRect: jest.fn()
  };
  window.requestAnimationFrame = callback => callback();

  test('works with black color mode', () => {
    drawDragonCurve(context, 4, 0, 'black', 1, false);
    expect(context.stroke).toHaveBeenCalled();
  });

  test('works with rainbow color mode', () => {
    drawDragonCurve(context, 4, 0, 'rainbow', 1, false);
    expect(context.stroke).toHaveBeenCalled();
  });

  test('works with contrast color mode', () => {
    drawDragonCurve(context, 4, 0, 'contrast', 1, false);
    expect(context.stroke).toHaveBeenCalled();
  });

  test('works with animation', () => {
    drawDragonCurve(context, 4, 1, 'contrast', 1, true);
    expect(context.stroke).toHaveBeenCalled();
  });
});
