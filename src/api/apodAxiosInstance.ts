import { NASA_API_KEY, NASA_APOD_API_URL } from "@env";
import _axios from "axios";

export const apodAxiosInstance = _axios.create({
  timeout: 5000,
  baseURL: NASA_APOD_API_URL,
  headers: {
    api_key: NASA_API_KEY,
  },
});
