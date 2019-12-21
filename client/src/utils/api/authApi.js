import post from './base/post';
import { apiUrl } from './base/axios';

export default {
  signUp: credentials => post(`${apiUrl}/auth/signup`, credentials),
  signIn: credentials => post(`${apiUrl}/auth/signin`, credentials),
};
