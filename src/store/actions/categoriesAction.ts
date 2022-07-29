import { Dispatch } from 'redux';
import { errNotify } from '../exceptions/api-error';
import ax from '../../settings/axios-glamping';
import { CategoriesAction, CategoryActionTypes } from '../types/categoriesTypes';

export const fetchCategories = (): any => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    try {
      const response = await ax.get('categories');

      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORY_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};
