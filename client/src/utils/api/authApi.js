import post from './base/post';
import get from './base/get';
import { apiUrl, getAuthParams } from './base/axios';

export default {
  signUp: credentials => post(`${apiUrl}/auth/signup`, credentials),
  signIn: credentials => post(`${apiUrl}/auth/signin`, credentials),
  signOut: () => get(`${apiUrl}/auth/signout`, getAuthParams()),
};
