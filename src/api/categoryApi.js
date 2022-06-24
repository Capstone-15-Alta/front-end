import axiosClient from "./axiosClient";

const categoryApi = {
  getCategory: (params) => {
    const url = "category";
    return axiosClient.get(url, params);
  },
  getThreadCategory: (params) => {
    const url = "thread";
    console.log(params.categoryYangDipilih)
    const category = params.categoryYangDipilih
    return axiosClient.get(url + `/category/${category}`);
  }
};

export default categoryApi;
