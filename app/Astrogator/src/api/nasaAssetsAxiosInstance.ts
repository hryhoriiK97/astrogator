import {NASA_IMAGE_VIDEO_API_URL} from '@env';
import _axios from 'axios';

export const nasaAssetsAxiosInstance = _axios.create({
  timeout: 5000,
  baseURL: NASA_IMAGE_VIDEO_API_URL,
});
