import React from 'react';
import App from '../../../src/js/components/App';

jest.mock('../../../src/js/dispatch');

describe('App', () => {
  let shallowWrapper, state;

  function render() {
    return shallow(<App state={state} />);
  }

  test('should match snapshot', () => {
    expect(shallowWrapper.getElement()).toMatchSnapshot();
  });
});
