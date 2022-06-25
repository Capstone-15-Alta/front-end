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
  getUser: (params) => {
    const url = "user";
    return axiosClient.get(url, params);
  },
  getThread: (params) => {
    const url = "thread/";
    console.log(params)
    return axiosClient.get(url + `pages?size=5&page=${params.curentPage}`);
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
