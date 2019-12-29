import React from 'react';
import PropTypes from 'prop-types';

/* Fix an error in Emotion */
const withInnerRef = (Component) => {
  const Wrapped = ({ innerRef, ...other }) => (
    <Component ref={innerRef} {...other} />
  );

  Wrapped.propTypes = {
    innerRef: PropTypes.func,
  };
  Wrapped.defaultProps = {
    innerRef: null,
  };

  return Wrapped;
};

export default withInnerRef;
