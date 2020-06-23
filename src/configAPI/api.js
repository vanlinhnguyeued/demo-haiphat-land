import axios from "axios";
const request = axios.create({
  baseURL: `http://trananh.citysoft.vn/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

request.interceptors.request.use(
  (config) => {
    let token;
    try {
      token = localStorage.getItem("token");
    } catch (e) {
      console.log(e);
    }
    if (token !== null) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// after send request
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const res = error.response;
    switch (res.status) {
      case 401:
        break;
      case 403:
        //do something
        break;
      case 404:
        //do something
        break;
      //...
      default:
        break;
    }
    return Promise.reject(res.status);
  }
);

export default request;
