import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

import SpinnerWrapper from '../styled/components/Spinner';

const Spinner = () => (
  <SpinnerWrapper>
    <ClipLoader />
  </SpinnerWrapper>
);

const withSpinner = (Component) => {
  const Wrapped = ({ isFetching, ...props }) => (
    isFetching ? <Spinner /> : <Component {...props} />
  );

  Wrapped.propTypes = {
    isFetching: PropTypes.bool.isRequired,
  };

  return Wrapped;
};

export default withSpinner;
