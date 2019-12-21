import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUpForm from './containers/SignUpForm';
import { fetchSignUp } from './redux/actions';
import SignUpWrapper from './styled';

const SignUpContainer = (props) => {
  const handleSignUp = formValues => props.fetchSignUp(formValues);

  return (
    <SignUpWrapper>
      <SignUpForm onSubmit={handleSignUp} />
    </SignUpWrapper>
  );
};

SignUpContainer.propTypes = {
  fetchSignUp: PropTypes.func.isRequired,
};

export default connect(null, { fetchSignUp })(SignUpContainer);
