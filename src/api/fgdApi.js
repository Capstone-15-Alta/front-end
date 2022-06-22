import axiosClient from "./axiosClient";

const fgdApi = {
  getUser: (params) => {
    const url = "user";
    return axiosClient.get(url, params);
  },
  login: (params) => {
    const url = "auth/login";
    return axiosClient.post(url, params);
  },
  getThread: (params) => {
    const url = "thread/";
    return axiosClient.get(url, params);
  },
  postThread: (params) => {
    const url = "thread/";
    return axiosClient.post(url, params);
  },
};

export default fgdApi;
