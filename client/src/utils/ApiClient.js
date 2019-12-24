import exampleApi from './api/exampleApi';
import authApi from './api/authApi';
import userApi from './api/userApi';
import trainingApi from './api/trainingApi';

const api = {
  example: exampleApi,
  auth: authApi,
  user: userApi,
  training: trainingApi,
};

export default api;
