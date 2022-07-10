import axiosClient from "./axiosClient";

const categoryApi = {
  getCategory: (params) => {
    const url = "category";
    return axiosClient.get(url, params);
  },
  getThread: (value) => {
    const url = `thread/?category=${value}`;
    // console.log(value)
    return axiosClient.get(url);
  },
};

export default categoryApi;
