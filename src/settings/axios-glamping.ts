import axios from 'axios';

import store from '../store/configureStore';
import { UserState } from '../store/types/users';
import config from './config';
import { errNotify } from '../store/exceptions/api-error';

const ax = axios.create({
  baseURL: config.apiUrl,
  withCredentials: true,
});

ax.interceptors.request.use(config => {
  const users: UserState = store.getState().users;
  if (users.isAuth) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    // console.log('ax.interceptors.request.use '+(new Date()).toISOString());
  }
  return config;
});

ax.interceptors.response.use(
  config => config,
  async error => {
    if (!error.response) {
      throw error;
    }
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${config.apiUrl}/users/refresh`, { withCredentials: true });
        // console.log(response);
        localStorage.setItem('token', response.data.accessToken);
        return ax.request(originalRequest);
      } catch (err) {
        errNotify('Неудача!', 'Что-то пошло не так, проверьте заполняемые данные и соеднинение с интернетом!', error);
      }
    }
    throw error;
  }
);

export default ax;
