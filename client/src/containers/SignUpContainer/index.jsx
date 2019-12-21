import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SignUpForm from './containers/SignUpForm';
import { fetchSignUp } from './redux/actions';
import SignUpWrapper from './styled';

const SignUpContainer = (props) => {
  const handleSignUp = (user) => {
    const { history } = props;
    props.fetchSignUp(user, history);
  };

  return (
    <SignUpWrapper>
      <SignUpForm onSubmit={handleSignUp} />
    </SignUpWrapper>
  );
};

SignUpContainer.propTypes = {
  fetchSignUp: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  fetchSignUp,
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(SignUpContainer);
