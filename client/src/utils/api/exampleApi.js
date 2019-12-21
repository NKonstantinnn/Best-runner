import get from './base/get';
import { apiUrl } from './base/axios';

export default {
  get: () => get(`${apiUrl}/example`),
  getSum: () => get(`${apiUrl}/example/sum`),
  getBitcoinPrice: () => get(`${apiUrl}/example/bitcoin`),
};
