import axiosClient from "./axiosClient";

const categoryApi = {
  getCategory: (params) => {
    const url = "category";
    return axiosClient.get(url, params);
  },
  getThreadCategory: (params) => {
    const url = "thread/category";
    return axiosClient.get(url, params);
  }
};

export default categoryApi;
