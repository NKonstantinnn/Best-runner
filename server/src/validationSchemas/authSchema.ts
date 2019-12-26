import { Request } from 'express';
import { ValidationSchema } from 'express-validator';

export const signUpSchema = (req: Request): ValidationSchema => ({
  username: {
    isUsername: { errorMessage: 'Invalid username format' },
    isUserNotExistsByUsername: { errorMessage: 'User with this username is already exists' },
    isNotEmpty: { errorMessage: 'Username is required' },
  },
  password: {
    isPassword: { errorMessage: 'Invalid password format' },
    isLength: { options: [{ min: 6 }], errorMessage: 'Min length is 6 symbols' },
    isNotEmpty: { errorMessage: 'Password is required' },
  },
  captcha: {
    isCaptchaVerified: {
      errorMessage: 'Captcha is not verified',
      options: [req.connection.remoteAddress],
    },
  },
});

export const signInSchema = (req: Request): ValidationSchema => ({
  username: {
    isNotEmpty: { errorMessage: 'Username is required' },
  },
  password: {
    isNotEmpty: { errorMessage: 'Password is required' },
  },
});
