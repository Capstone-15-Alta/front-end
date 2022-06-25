import axiosClient from "./axiosClient";

const fgdApi = {
  login: (params) => {
    const url = "auth/login";
    return axiosClient.post(url, params);
  },
  register: (params) => {
    const url = "auth/register";
    return axiosClient.post(url, params);
  },
  getAllUser: (params) => {
    const url = "user";
    return axiosClient.get(url, params);
  },
  getUserById: (id, params) => {
    const url = `user/${id}`;
    return axiosClient.get(url, params);
  },
  getThread: (params) => {
    const url = "thread/";
    return axiosClient.get(url, params);
  },
  getCategory: (params) => {
    const url = "category/";
    return axiosClient.get(url, params);
  },
  postThread: (params, token) => {
    const url = "thread";
    return axiosClient.post(url, params, token);
  },
};

export default fgdApi;
