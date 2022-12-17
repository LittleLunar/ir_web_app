import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "";

axios.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    const token: string = localStorage.getItem("token") as string;

    if (token != null) {
      request.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    request.headers = {
      ...request.headers,
      "Access-Control-Allow-Origin": "*",
    };

    return request;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      window.location.href = "/";
    }
    throw error as Error;
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    throw error;
  }
);
