import { Request } from 'express';
import { ValidationSchema } from 'express-validator';

export const addTrainingSchema = (req: Request): ValidationSchema => ({
  activity: {
    isNotEmpty: { errorMessage: 'Activity is required' },
    isActivityType: { errorMessage: 'Invalid type of activity' },
  },
  date: {
    isNotEmpty: { errorMessage: 'Date is required' },
    isDate: { errorMessage: 'Invalid date' },
    isMoreSignUpDate: {
        errorMessage: 'Date of training should be more date of a sign up',
        options: [(req as any).user.signUpDate]
    },
    isNotMoreCurrentDate: { errorMessage: 'Date of training should be not more a current date' }
  },
  distance: {
    isNumber: { errorMessage: 'Distance should be a number' },
    isPositiveNumber: { errorMessage: 'Distance should be a positive number' },
  },
});

export const editTrainingSchema = (req: Request): ValidationSchema => ({
  _id: {
    isMongoId: { errorMessage: 'Invalid tranining id' },
  },
  activity: {
    isNotEmpty: { errorMessage: 'Activity is required' },
    isActivityType: { errorMessage: 'Invalid type of activity' },
  },
  date: {
    isNotEmpty: { errorMessage: 'Date is required' },
    isDate: { errorMessage: 'Invalid date' },
    isMoreSignUpDate: {
        errorMessage: 'Date of training should be more date of a sign up',
        options: [(req as any).user.signUpDate]
    },
    isNotMoreCurrentDate: { errorMessage: 'Date of training should be not more a current date' }
  },
  distance: {
    isNumber: { errorMessage: 'Distance should be a number' },
    isPositiveNumber: { errorMessage: 'Distance should be a positive number' },
  },
});

export const deleteTrainingSchema = (req: Request): ValidationSchema => ({
  id: {
    isMongoId: { errorMessage: 'Invalid tranining id' },
  },
});
