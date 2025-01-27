import axios from "axios";

const interceptor = axios.create({
  baseURL: "https://666feaf80900b5f87248a96d.mockapi.io/billManage/",
  timeout: 6000,
});

export default interceptor;
