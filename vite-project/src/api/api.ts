import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
    "Accept-Language": "ru-RU",
  },
});
