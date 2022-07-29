import { notification } from 'antd';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { errNotify } from '../exceptions/api-error';
import {
  SharingPitchAction,
  SharingPitchActionTypes,
} from '../types/sharingTypes';

export const fetchSharingPitch = (): any => {
  return async (dispatch: Dispatch<SharingPitchAction>) => {
    try {
      const response = await ax.get('sharingPitch');

      dispatch({
        type: SharingPitchActionTypes.FETCH_SHARING_PITCH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: SharingPitchActionTypes.FETCH_SHARING_PITCH_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchCurrentSharingPitch = (id: string): any => {
  return async (dispatch: Dispatch<SharingPitchAction>) => {
    try {
      const response = await ax.get(`sharingPitch/${id}`);
      dispatch({ type: SharingPitchActionTypes.FETCH_CURRENT_SHARING_PITCH_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: SharingPitchActionTypes.FETCH_CURRENT_SHARING_PITCH_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const createSharingPitch = (state: {}): any => {
  return async () => {
    try {
      await ax.post('sharingPitch', state);
      notification.success({
        message: 'Успех!',
        description: 'Заявка успешно создана!',
      });
    } catch (error) {
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};
