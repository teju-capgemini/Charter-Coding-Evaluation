import axios from "axios";

const VITE_BASE_URL = 'http://localhost:5000'
const axiosInstance = axios.create({
  baseURL: VITE_BASE_URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
  return config;
}, 
 (error) => {
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use((response) => {
  return response;
}, 
 (error) => {
  return Promise.reject(error);
});

export default axiosInstance;