import { notification } from 'antd';
import { CallHistoryMethodAction, push } from 'connected-react-router';
import { Dispatch } from 'redux';
import axios from 'axios';
import config from '../../../src/settings/config';

import ax from '../../settings/axios-glamping';
import { UserAction, UserActionTypes } from '../types/users';
import { errNotify } from '../exceptions/api-error';

export const signInUser = (userData: { email: string; password: string }): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      const response = await ax.post('/users/login', userData);
      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: UserActionTypes.SIGN_IN_SUCCESS, payload: response.data.user });
      dispatch(push('/'));
      notification.success({
        message: 'Успех!',
        description: 'Вы удачно авторизовались!',
      });
    } catch (error) {
      dispatch({ type: UserActionTypes.SIGN_IN_ERROR, payload: 'Sign In Error' });
      errNotify(
        'Неудача!',
        error.response?.data?.message
          ? error.response?.data?.message
          : 'Проверьте заполняемые данные и соеднинение с интернетом!',
        error
      );
    }
  };
};

export const changePassword = (
  userData: { email: string; oldPassword: string; newPassword: string },
  userId: string
): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    //Выполняем logout если нужно
    if (userId) {
      try {
        await ax.post(`/users/logout/${userId}`);
        localStorage.removeItem('token');
        dispatch({ type: UserActionTypes.LOGOUT_USER_SUCCESS });
      } catch (error: any) {
        dispatch({ type: UserActionTypes.LOGOUT_USER_ERROR, payload: 'Logout Error' });
        notification.error({
          message: 'Ошибка!',
          description:
            'Ошибка logout. ' + error.response?.data?.message
              ? error.response?.data?.message
              : 'Проверьте заполняемые данные и соеднинение с интернетом!',
          duration: 60,
        });
        return;
      }
    }

    //Выполняем login под пользователем чей пароль надо поменять
    try {
      const response = await ax.post('/users/login', { email: userData.email, password: userData.oldPassword });
      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: UserActionTypes.SIGN_IN_SUCCESS, payload: response.data.user });
      dispatch(push('/'));
    } catch (error: any) {
      dispatch({ type: UserActionTypes.SIGN_IN_ERROR, payload: 'Sign In Error' });
      notification.error({
        message: 'Ошибка!',
        description:
          'Ошибка login. ' + error.response?.data?.message
            ? error.response?.data?.message
            : 'Проверьте заполняемые данные и соеднинение с интернетом!',
        duration: 60,
      });
      return;
    }

    //Выполняем замену пароля
    try {
      await ax.post('/users/changePassword', userData);
      dispatch({ type: UserActionTypes.SIGN_CHANGE_SUCCESS });
      notification.success({
        message: 'Успех!',
        description: 'Пароль был удачно изменен!',
      });
      dispatch(push('/'));
    } catch (error: any) {
      dispatch({ type: UserActionTypes.SIGN_CHANGE_ERROR, payload: 'Sign Change Error' });
      notification.error({
        message: 'Ошибка!',
        description: error.response?.data?.message
          ? error.response?.data?.message
          : 'Проверьте заполняемые данные и соеднинение с интернетом!',
        duration: 60,
      });
    }
  };
};

export const newPassword = (userData: { email: string; newPassword: string }): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    //Выполняем замену пароля
    try {
      await ax.post('/users/newPassword', userData);
      dispatch({ type: UserActionTypes.SIGN_CHANGE_SUCCESS });
      notification.success({
        message: 'Успех!',
        description: 'Пароль был удачно изменен!',
      });
      dispatch(push('/login'));
    } catch (error: any) {
      dispatch({ type: UserActionTypes.SIGN_CHANGE_ERROR, payload: 'Sign Change Error' });
      notification.error({
        message: 'Ошибка!',
        description: error.response?.data?.message
          ? error.response?.data?.message
          : 'Проверьте заполняемые данные и соеднинение с интернетом!',
        duration: 60,
      });
    }
  };
};

export const closeWindow = (path: string): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    dispatch(push(path));
  };
};

export const sendActivation = (email: string): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      const response = await ax.get(`/users/sendActivation/${email}`);
      dispatch({ type: UserActionTypes.SEND_ACTIVATION_SUCCESS });
      notification.success({
        message: 'Успех!',
        description: `Активация переслана! 
        Для активации аккаунта перейдите по ссылке в вашем почтовом ящике ${response.data.user.email}`,
        duration: 60,
      });
    } catch (error) {
      dispatch({ type: UserActionTypes.SEND_ACTIVATION_ERROR, payload: 'Send Activation Error' });
      errNotify(
        'Неудача!',
        error.response?.data?.message
          ? error.response?.data?.message
          : 'Проверьте заполняемые данные и соеднинение с интернетом!',
        error
      );
    }
  };
};

export const sendChangePassword = (email: string): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      await ax.get(`/users/sendChangePassword/${email}`);
      dispatch({ type: UserActionTypes.SEND_ACTIVATION_SUCCESS });
      notification.success({
        message: 'Успех!',
        description: `Смена пароля переслана! 
        Для смены паролы перейдите по ссылке в вашем почтовом ящике ${email}`,
        duration: 60,
      });
    } catch (error) {
      dispatch({ type: UserActionTypes.SEND_ACTIVATION_ERROR, payload: 'Send Activation Error' });
      errNotify(
        'Неудача!',
        error.response?.data?.message
          ? error.response?.data?.message
          : 'Проверьте заполняемые данные и соеднинение с интернетом!',
        error
      );
    }
  };
};

export const sendNewPassword = (email: string): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      await ax.get(`/users/sendNewPassword/${email}`);
      dispatch({ type: UserActionTypes.SEND_ACTIVATION_SUCCESS });
      notification.success({
        message: 'Успех!',
        description: `Ввод нового пароль переслан! 
        Для ввода нового пароля перейдите по ссылке в вашем почтовом ящике ${email}`,
        duration: 60,
      });
    } catch (error) {
      dispatch({ type: UserActionTypes.SEND_ACTIVATION_ERROR, payload: 'Send Activation Error' });
      errNotify(
        'Неудача!',
        error.response?.data?.message
          ? error.response?.data?.message
          : 'Проверьте заполняемые данные и соеднинение с интернетом!',
        error
      );
    }
  };
};

export const signUpUser = (userData: { email: string; password: string }): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      const response = await ax.post('/users/registration', userData);
      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: UserActionTypes.SIGN_UP_SUCCESS });
      dispatch(push('/login'));
      notification.success({
        message: 'Успех!',
        description: `Вы удачно зарегистрировались! 
        Для активации аккаунта перейдите по ссылке в вашем почтовом ящике ${response.data.user.email}`,
        duration: 60,
      });
    } catch (error) {
      dispatch({ type: UserActionTypes.SIGN_UP_ERROR, payload: 'Sign Up Error' });
      errNotify(
        'Неудача!',
        error.response?.data?.message
          ? error.response?.data?.message
          : 'Проверьте заполняемые данные и соеднинение с интернетом!',
        error
      );
    }
  };
};

export const logoutUser = (userId: string): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      await ax.post(`/users/logout/${userId}`);
      localStorage.removeItem('token');
      dispatch({ type: UserActionTypes.LOGOUT_USER_SUCCESS });
      dispatch(push('/login'));
      notification.success({
        message: 'Успех!',
        description: 'Вы удачно вышли!',
      });
    } catch (error) {
      dispatch({ type: UserActionTypes.LOGOUT_USER_ERROR, payload: 'Logout Error' });
      errNotify(
        'Неудача!',
        error.response?.data?.message
          ? error.response?.data?.message
          : 'Проверьте заполняемые данные и соеднинение с интернетом!',
        error
      );
    }
  };
};

export const checkAuth = (): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      const response = await axios.get(`${config.apiUrl}/users/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: UserActionTypes.SIGN_IN_SUCCESS, payload: response.data.user });
    } catch (error) {
      dispatch({ type: UserActionTypes.SIGN_IN_ERROR, payload: 'Check Auth Error' });
      errNotify(
        'Неудача!',
        error.response?.data?.message
          ? error.response?.data?.message
          : 'Проверьте заполняемые данные и соеднинение с интернетом!',
        error
      );
    }
  };
};

export const facebookLogin = (userData: { email: string; username: string }): any => {
  return async (dispatch: Dispatch<UserAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      const response = await ax.post('users/facebook-login', userData);
      dispatch({ type: UserActionTypes.SIGN_IN_SUCCESS, payload: response.data });
      dispatch(push('/'));
    } catch (error) {
      dispatch({ type: UserActionTypes.SIGN_IN_ERROR, payload: 'Sign In Error' });
      notification.error({
        message: 'Неудача!',
        description: error.response?.data?.message
          ? error.response?.data?.message
          : 'Проверьте заполняемые данные и соеднинение с интернетом!',
      });
    }
  };
};
