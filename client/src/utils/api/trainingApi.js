import get from './base/get';
import { apiUrl, getAuthParams } from './base/axios';

export default {
  getTrainings: () => get(`${apiUrl}/training/list`, getAuthParams()),
};
