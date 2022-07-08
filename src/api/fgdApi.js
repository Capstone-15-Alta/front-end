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
    const url = "user/";
    console.log(params);
    return axiosClient.get(url + `?page=${params.curentPage}`);
  },
  getUserById: (id, params) => {
    const url = `user/${id}`;
    return axiosClient.get(url, params);
  },
  getThread: (params) => {
    const url = "thread/";
    console.log(params);
    return axiosClient.get(url + `?page=${params.curentPage}`);
  },
  getLengthThread: (params) => {
    const url = "thread";
    console.log(params);
    return axiosClient.get(url, params);
  },
  getThreadByUserId: (id, params) => {
    const url = `thread/user/${id}`;
    return axiosClient.get(url, params);
  },
  getThreadById: (id, params) => {
    const url = `thread/${id}`;
    return axiosClient.get(url, params);
  },
  getCategory: (params) => {
    const url = "category/";
    return axiosClient.get(url, params);
  },
  postThread: (data, token) => {
    const url = "thread";
    return axiosClient.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  followUser: (id, token, params) => {
    const url = `follow/user/${id}`;
    return axiosClient.put(url, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  uploadPhoto: (token, data) => {
    const url = `user/photo`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  uploadBanner: (token, data) => {
    const url = `user/cover`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  likeThread: (id, token) => {
    const url = `like/thread/${id}`;
    return axiosClient.put(url, id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  reportThread: (data, token) => {
    const url = "report";
    console.log(url, data, token);
    return axiosClient.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  editProfile: (data, token) => {
    const url = "user";
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getRanking: (params) => {
    const url = "user/ranking";
    return axiosClient.get(url,params);
  },
};

export default fgdApi;
