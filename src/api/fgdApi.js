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
};

export default fgdApi;
