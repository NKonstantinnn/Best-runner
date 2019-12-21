import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { reduxForm } from 'redux-form';

import Field from '../../../shared/redux-form-components/CustomField';
import Captcha from '../../../shared/redux-form-components/Captcha';
import {
  SignUpFormWrapper,
  SignUpFormTitle,
  SignUpFormImage,
  StyledSignUpForm,
  SignUpButton,
} from './styled/SignUpForm';

const SignUpForm = ({ handleSubmit }) => (
  <SignUpFormWrapper>
    <SignUpFormImage src="/images/logo.png" alt="logo" />
    <SignUpFormTitle>Sign up</SignUpFormTitle>
    <StyledSignUpForm onSubmit={handleSubmit}>
      <Field id="username" name="username" type="text" component={Input} label="Login" />
      <Field id="password" name="password" type="password" component={Input} label="Password" />
      <Field component={Captcha} id="captcha" name="captcha" label="Captcha" />
      <SignUpButton type="submit" color="primary">Sign up</SignUpButton>
    </StyledSignUpForm>
  </SignUpFormWrapper>
);

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'SignUpForm',
})(SignUpForm);
