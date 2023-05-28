import { SPACE_FLIGHT_NEWS_API_URL } from "@env";
import _axios from "axios";

export const spaceFlightNewsAxiosInstance = _axios.create({
  timeout: 10000,
  baseURL: SPACE_FLIGHT_NEWS_API_URL,
});
