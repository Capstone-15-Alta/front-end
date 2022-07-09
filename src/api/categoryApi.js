import axiosClient from "./axiosClient";

const categoryApi = {
  getCategory: (params) => {
    const url = "category";
    return axiosClient.get(url, params);
  },
  getThread: (value) => {
    const url = "thread/";
    // console.log(value)
    return axiosClient.get(url + `?category=` + `${value}`);
  },
};

export default categoryApi;
