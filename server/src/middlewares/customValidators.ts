import { Handler } from 'express';
import * as expressValidator from 'express-validator';
import axios from 'axios';
import * as mongoose from 'mongoose';

import UserModel from '../models/UserModel';
import config from '../config';
import { ActivityType } from '../models/TrainingModel';

const isNotEmpty = (value: any[]): boolean => {
  if (!value) { return false; }

  return Boolean(value.length);
};

const isContains = (item: any, targetArray: any[]): boolean => {
  if (!item || !targetArray) { return false; }

  return targetArray.includes(item);
};

const isUsername = (username: string): boolean => (
  /^[^._ ](?:[\w-]|[\w-])+[^._ ]$/.test(username)
);
const isPassword = (password: string): boolean => (
  /(?=.*[0-9])(?=.*[а-яёa-z])(?=.*[A-ZА-ЯЁ])[0-9a-zA-Z.,';\]\[{}:"<>?!@#$%^&*()_\-+=|\/№А-Яа-яЁё]{6,}/.test(password)
);

const isUserNotExistsByUsername = async (username: string): Promise<void> => {
  if (!username) { return Promise.resolve(); }

  const user = await UserModel.findOne({ username });

  if (user) { return Promise.reject('User not exists'); }

  return Promise.resolve();
};

const isCaptchaVerified = async (captchaResponse: string, userIP: string): Promise<void> => {
  if (!captchaResponse) { return Promise.reject('Captcha is required'); }

  const captchaUrl = config.get('captcha.url');
  const captchaSecret = config.get('captcha.secret');

  const verificationResponse = await axios.post(captchaUrl, {}, {
    params: {
      secret: captchaSecret,
      response: captchaResponse,
      remoteip: userIP,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  });

  const { success } = verificationResponse.data;

  return success ? Promise.resolve() : Promise.reject('Captcha is not verified');
};

const isActivityType = (activity: string): boolean => ActivityType[activity.toUpperCase()] ? true : false;

const isDate = (date: string): boolean => new Date(date).toString() !== 'Invalid Date';

const isMoreSignUpDate = (date: string, signUpDate: string): boolean => new Date(date).getTime() > new Date(signUpDate).getTime();

const isNotMoreCurrentDate = (date: string): boolean => new Date(date).getTime() <= Date.now();

const isNumber = (value: any):boolean => !isNaN(parseFloat(value));

const isPositiveNumber = (value: number): boolean => value > 0;

const isMongoId = (id: string): boolean => mongoose.Types.ObjectId.isValid(id);

export default (): Handler => (
  expressValidator({
    customValidators: {
      isNotEmpty,
      isContains,
      isUsername,
      isPassword,
      isUserNotExistsByUsername,
      isCaptchaVerified,
      isActivityType,
      isDate,
      isMoreSignUpDate,
      isNotMoreCurrentDate,
      isNumber,
      isPositiveNumber,
      isMongoId,
    },
  })
);
