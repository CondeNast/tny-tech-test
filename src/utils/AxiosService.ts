import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class AxiosServiceSingleton {
  axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({});
    this.axiosClient.interceptors.request.use(this.interceptRequest);
    this.axiosClient.interceptors.response.use(this.interceptResponse);
  }

  interceptRequest = (request: AxiosRequestConfig) => {
    request.url = `${process.env.BASE_URL}${request.url}`;
    return request;
  };

  interceptResponse = (response: AxiosResponse) => {
    return response;
  };
}

const AxiosService = new AxiosServiceSingleton();

export default AxiosService;
