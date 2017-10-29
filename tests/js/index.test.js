import ReactDOM from 'react-dom';
import initDragonCurve from '../../src/js/index';
import drawDragonCurve from '../../src/js/drawDragonCurve';

jest.mock('react-dom');
jest.mock('../../src/js/drawDragonCurve');

describe('initDragonCurve', () => {
  beforeEach(() => {
    window.document.getElementById = jest.fn(() =>
      document.createElement('div')
    );
  });

  test('should call ReactDOM.render', () => {
    initDragonCurve();
    expect(ReactDOM.render).toHaveBeenCalled();
  });

  test('should call drawDragonCurve', () => {
    initDragonCurve();
    expect(drawDragonCurve).toHaveBeenCalled();
  });
});
