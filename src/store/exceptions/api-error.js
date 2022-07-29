import { notification } from 'antd';

const NOTIFY_DURATION = 5;
const SHOW_NOTIFICATION_ERROR = true;

export const errNotify = (message, description, err, duration = NOTIFY_DURATION) => {
  if (SHOW_NOTIFICATION_ERROR) {
    notification.error({
      message: message,
      description: description,
      duration: duration,
    });
    return;
  }
  if (err.response && err.response.data && err.response.data.message === 'Учетная запись не активирована') {
    notification.error({
      message: 'Неудача!',
      description: 'Учетная запись не активирована! Активируйте учетную запись!',
      duration: duration,
    });
    return;
  }
  if (err.response && err.response.status == 401) {
    return;
  }
  // eslint-disable-next-line no-undef
  alert(errMsg(err));
  // eslint-disable-next-line no-undef
  console.error(err);
};

export const errMsg = err => {
  let method;
  let url;
  let status = '';
  let statusText;
  let name;
  let message;
  let error;
  let responseDataMessage;

  if (err.config?.method) {
    method = `\n err.config.method: ${err.config?.method}`;
  } else {
    method = '';
  }

  if (err.config?.url) {
    url = `\n err.config.method: ${err.config?.url}`;
  } else {
    url = '';
  }

  if (err.response?.status && err.response?.statusText) {
    status = `\n err.response.status: ${err.response?.status} ${err.response?.statusText}`;
  } else {
    status = '';
  }

  if (err.response?.data?.name) {
    name = `\n err.response.data.name: ${err.response?.data?.name}`;
  } else {
    name = '';
  }

  if (err.response?.data?.message) {
    message = `\n err.response.data.message: ${err.response?.data?.message}`;
  } else {
    message = '';
  }

  if (err.response?.data?.error) {
    error = `\n err.response.data.error: ${err.response?.data?.error}`;
  } else {
    error = '';
  }

  if (err.response?.data) {
    if (typeof err.response?.data === 'object') {
      responseDataMessage = '';
    } else {
      responseDataMessage = `err.response.data: ${err.response?.data}`;
    }
  } else {
    responseDataMessage = '';
  }

  return `\n  Ошибка при получении данных! \n  Общее сообщение: ${err} \n  Свойства объекта ошибки: ${status}${method}${url}${name}${message}${error}${responseDataMessage}`;
};
