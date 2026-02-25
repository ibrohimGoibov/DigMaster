import axios from "axios";

export const SaveToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const GetToken = () => {
  return localStorage.getItem("token");
};

export const axiosRequest = axios.create({
  baseURL: "https://swagger-1-nxko.onrender.com",
});

axiosRequest.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = GetToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);