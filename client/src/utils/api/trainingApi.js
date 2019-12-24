import get from './base/get';
import post from './base/post';
import { apiUrl, getAuthParams } from './base/axios';

export default {
  getTrainings: () => get(`${apiUrl}/training/list`, getAuthParams()),
  addTraining: training => post(`${apiUrl}/training/create`, training, getAuthParams()),
};
