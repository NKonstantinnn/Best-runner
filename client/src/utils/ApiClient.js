import authApi from './api/authApi';
import userApi from './api/userApi';
import trainingApi from './api/trainingApi';

const api = {
  auth: authApi,
  user: userApi,
  training: trainingApi,
};

export default api;
