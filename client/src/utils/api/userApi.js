import get from './base/get';
import { apiUrl, getAuthParams } from './base/axios';

export default {
  getCurrent: () => get(`${apiUrl}/user/current`, getAuthParams()),
};
