import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { reduxForm } from 'redux-form';

import Field from '../../../shared/redux-form-components/CustomField';
import Captcha from '../../../shared/redux-form-components/Captcha';
import {
  AuthFormWrapper,
  AuthFormTitle,
  AuthFormTypeText,
  AuthFormImage,
  StyledAuthForm,
  AuthFormLink,
  AuthFormButton,
} from './styled/AuthForm';

const AuthForm = ({ isSignUp, handleSubmit }) => (
  <AuthFormWrapper>
    <AuthFormImage src="/images/logo.png" alt="logo" />
    <AuthFormTitle>BestRunner</AuthFormTitle>
    <AuthFormTypeText>{isSignUp ? 'Sign up' : 'Sign in'}</AuthFormTypeText>
    <StyledAuthForm onSubmit={handleSubmit}>
      <Field id="username" name="username" type="text" component={Input} label="Login" />
      <Field id="password" name="password" type="password" component={Input} label="Password" />
      {isSignUp && <Field id="captcha" name="captcha" component={Captcha} label="Captcha" />}
      <AuthFormLink to={isSignUp ? '/signin' : '/signup'}>
        Enter to {isSignUp ? 'sign in' : 'sign up'}
      </AuthFormLink>
      <AuthFormButton type="submit" color="primary">{isSignUp ? 'Sign up' : 'Sign in'}</AuthFormButton>
    </StyledAuthForm>
  </AuthFormWrapper>
);

AuthForm.propTypes = {
  isSignUp: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'SignUpForm',
})(AuthForm);
