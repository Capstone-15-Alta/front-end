import axiosClient from "./axiosClient";

const categoryApi = {
  getCategory: (params) => {
    const url = "category";
    return axiosClient.get(url, params);
  }
};

export default categoryApi;
