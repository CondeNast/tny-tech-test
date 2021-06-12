import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class AxiosServiceSingleton {
  axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({});
    this.axiosClient.interceptors.request.use(this.requestInterceptor);
  }

  requestInterceptor = (request: AxiosRequestConfig) => {
    const apiK = process.env.API_KEY;
    if (request.headers.Authorization === undefined) {
      request.headers = {
        "Content-Type": "application/json",
        Authorization: apiK,
      };
    }
    return request;
  };
}

const AxiosService = new AxiosServiceSingleton();

export default AxiosService;
