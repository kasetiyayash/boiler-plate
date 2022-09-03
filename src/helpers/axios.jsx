import axios from "axios";
import { ACCESS_TOKEN } from "../utils/Constants";

const API_URL = "https://otm.zyko.app/api/";

export const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.defaults.headers.common["x-access-token"] =
  localStorage.getItem(ACCESS_TOKEN);

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
