import get from './base/get';
import post from './base/post';
import put from './base/put';
import del from './base/delete';
import { apiUrl, getAuthParams } from './base/axios';

export default {
  getTrainings: () => get(`${apiUrl}/training/list`, getAuthParams()),
  addTraining: training => post(`${apiUrl}/training/create`, training, getAuthParams()),
  editTraining: training => put(`${apiUrl}/training/`, training, getAuthParams()),
  deleteTraining: trainingId => del(`${apiUrl}/training/${trainingId}`, getAuthParams()),
};
