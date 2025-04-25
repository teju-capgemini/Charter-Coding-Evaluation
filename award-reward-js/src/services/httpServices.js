import axios from "axios";
import axiosInstance from "../interceptor/axiosInstance"
import { toast } from "react-toastify";

const catchMethod = (err) => {
    toast.error(err.message)
};

const get = async (url, queryData = {}) => {
  return await axiosInstance
    .get(url, { params: queryData, ...({}), timeout: 1000000 })
    .then(async (response) => {
      return await Promise.resolve(response.data);
    })
    .catch(async (error) => {
      catchMethod(error.response);
      return await Promise.reject(error);
    });
};

const post = async (url, queryData = {}) => {
  return await axiosInstance
    .post(url, queryData)
    .then(async (response) => {
      return await Promise.resolve(response.data);
    })
    .catch(async (error) => {
      catchMethod(error);
      return await Promise.reject(error.response);
    });
};

const put = async (url, uploadHeader, queryData = {}) => {
  return await axiosInstance
    .put(url, queryData, uploadHeader)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      catchMethod(error);
      return Promise.reject(error);
    });
};


const s3Upload = async (url,  queryData = {}) => {
  return await axios
    .put(url, queryData)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      catchMethod(error);
      return Promise.reject(error);
    });
};



const patch = async (url, queryData = {}) => {
  return await axiosInstance
    .patch(url, queryData)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      catchMethod(error);
      return Promise.reject(error);
    });
};

const httpDelete = async (url, queryData = {}) => {
  return await axiosInstance
    .delete(url, queryData)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      catchMethod(error);
      return Promise.reject(error);
    });
};

export { get, post, put, patch, httpDelete,s3Upload };