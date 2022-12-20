import {NASA_API_KEY, NASA_API_URL} from '@env';
import _axios from 'axios';

export const axios = _axios.create({
  timeout: 5000,
  baseURL: NASA_API_URL,
  headers: {
    key: NASA_API_KEY,
  },
});
