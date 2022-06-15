import { Dispatch } from 'redux';
import { notification } from 'antd';
import { errNotify } from '../exceptions/api-error';
import ax from '../../settings/axios-glamping';
import { LocationsAction, LocationsActionTypes } from '../types/locationsTypes';
import { CallHistoryMethodAction, push } from 'connected-react-router';

export const fetchLocations = (): any => {
  return async (dispatch: Dispatch<LocationsAction>) => {
    try {
      const response = await ax.get('locations/pages');
      // console.log(response.data.locations);
      dispatch({ type: LocationsActionTypes.FETCH_LOCATIONS_SUCCESS, payload: response.data.locations });
      dispatch({ type: LocationsActionTypes.FETCH_LOCATION_PAGES, payload: response.data.pages });
    } catch (error) {
      dispatch({ type: LocationsActionTypes.FETCH_LOCATIONS_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
      dispatch({ type: LocationsActionTypes.FETCH_LOCATION_PAGES_ERROR, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchLocationsMap = (filterOptions: any): any => {
  return async (dispatch: Dispatch<LocationsAction>) => {
    try {
      let paramStr;
      if (filterOptions.length > 0) {
        paramStr = JSON.stringify(filterOptions);
      } else {
        paramStr = '[]';
      }
      const response = await ax.get('locations/filters/' + paramStr);
      dispatch({ type: LocationsActionTypes.FETCH_LOCATIONS_MAP_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LocationsActionTypes.FETCH_LOCATIONS_MAP_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchNextLocationPages = (currentPage: number): any => {
  return async (dispatch: Dispatch<LocationsAction>) => {
    try {
      const response = await ax.get(`locations/pages?page=${currentPage}`);
      dispatch({ type: LocationsActionTypes.FETCH_LOCATIONS_SUCCESS, payload: response.data.locations });
    } catch (error) {
      dispatch({ type: LocationsActionTypes.FETCH_LOCATIONS_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchLastFourLocations = (): any => {
  return async (dispatch: Dispatch<LocationsAction>) => {
    try {
      const response = await ax.get('locations/last');
      dispatch({ type: LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: LocationsActionTypes.FETCH_LAST_FOUR_LOCATIONS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchCurrentLocation = (currentLocationId: string): any => {
  return async (dispatch: Dispatch<LocationsAction>) => {
    try {
      const response = await ax.get(`locations/${currentLocationId}`);
      dispatch({ type: LocationsActionTypes.FETCH_CURRENT_LOCATION_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LocationsActionTypes.FETCH_CURRENT_LOCATION_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const createLocation = (location: {}): any => {
  return async (dispatch: Dispatch<LocationsAction | CallHistoryMethodAction<[string, unknown?]>>) => {
    try {
      await ax.post('locations', location, { headers: { 'Content-Type': 'multipart/form-data' } });
      dispatch(push('/locations'));
      notification.success({
        message: 'Успех!',
        description: 'Создание глэмпинга прошло успешно!',
      });
    } catch (error) {
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};
