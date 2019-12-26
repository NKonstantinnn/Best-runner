import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import AuthForm from './containers/AuthForm';
import { fetchAuth } from './redux/actions';
import AuthWrapper from './styled';
import { History } from '../../shared/prop-types';

const SignUpContainer = (props) => {
  const validateAuthForm = (user) => {
    const { username, password } = user;
    const passwordRegEx = /(?=.*[0-9])(?=.*[а-яёa-z])(?=.*[A-ZА-ЯЁ])[0-9a-zA-Z.,';\][{}:"<>?!@#$%^&*()_\-+=|/№А-Яа-яЁё]{6,}/;
    const usernameRegExp = /^[^._ ](?:[\w-]|[\w-])+[^._ ]$/;
    const error = {};

    // username validation
    if (!username) {
      error.username = 'Username required';
    } else if (!usernameRegExp.test(username)) {
      error.username = 'Invalid username format';
    }

    // password validation
    if (!password) {
      error.password = 'Password required';
    } else if (password.length < 6) {
      error.password = 'Min length is 6 symbols';
    } else if (!passwordRegEx.test(password)) {
      error.password = 'Invalid password format';
    }

    if (Object.keys(error).length) {
      throw new SubmissionError(error);
    }
  };

  const handleAuth = (user) => {
    validateAuthForm(user);
    const { isSignUp, history } = props;
    props.fetchAuth(user, isSignUp, history);
  };

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleAuth} isSignUp={props.isSignUp} />
    </AuthWrapper>
  );
};

SignUpContainer.propTypes = {
  isSignUp: PropTypes.bool.isRequired,
  fetchAuth: PropTypes.func.isRequired,
  history: History.isRequired,
};

const mapDispatchToProps = {
  fetchAuth,
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(SignUpContainer);
