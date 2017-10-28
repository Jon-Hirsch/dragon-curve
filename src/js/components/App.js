import React from 'react';
import PropTypes from 'prop-types';

export default function App({ callBack }) {
  return (
    <div>
      <button onClick={() => {
        callBack();
      }}>Click Me</button>
    </div>
  );
}
App.propTypes = {
  context: PropTypes.shape({}).isRequired
};
