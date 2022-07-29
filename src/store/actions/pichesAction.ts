import { notification } from 'antd';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { errNotify } from '../exceptions/api-error';
import {
  PichesAction,
  PichesActionTypes,
} from '../types/pichesTypes';

export const fetchLastFourPiches = (): any => {
  return async (dispatch: Dispatch<PichesAction>) => {
    try {
      const response = await ax.get('piches/last');
      dispatch({ type: PichesActionTypes.FETCH_LAST_FOUR_PICHES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: PichesActionTypes.FETCH_LAST_FOUR_PICHES_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchPichesByLocationId = (locationId: number): any => {
  return async (dispatch: Dispatch<PichesAction>) => {
    try {
      const response = await ax.get('piches?locationId=' + locationId);
      dispatch({ type: PichesActionTypes.FETCH_PICHES_LOCATIONID_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: PichesActionTypes.FETCH_PICHES_LOCATIONID_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchCurrentPitch = (id: string): any => {
  return async (dispatch: Dispatch<PichesAction>) => {
    try {
      const response = await ax.get(`piches/${id}`);
      dispatch({ type: PichesActionTypes.FETCH_CURRENT_PITCH_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: PichesActionTypes.FETCH_CURRENT_PITCH_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const createPitch = (pitch: any) => {
  return async () => {
    try {
      await ax.post('pitch', pitch);
      notification.success({
        message: 'Успех!',
        description: 'Продукт успешно создан!',
      });
    } catch (error) {
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};