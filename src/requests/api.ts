import { refreshToken, logout } from './../redux/user';
import axios from 'axios';
import stores from './../stores';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// http request interceptors
instance.interceptors.request.use(config => {
  const token = stores.getState().user.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// http response interceptors
instance.interceptors.response.use(
  response => {
    const token = response.headers.authorization;
    if (token) {
      stores.dispatch(refreshToken(token));
    }
    return response;
  },
  error => {
    if (error.response) {
      if (error.response.status === 302) {
        // window.location.href = error.response.data.location
      }
      if (error.response.status === 401) {
        stores.dispatch(logout());
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
