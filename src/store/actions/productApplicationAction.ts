import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { errNotify } from '../exceptions/api-error';
import {
  ApplicationsProductsAction,
  ApplicationsProductsActionTypes,
} from '../types/productApplicationsType';

export const fetchAllAppProducts = (): any => {
  return async (dispatch: Dispatch<ApplicationsProductsAction>) => {
    try {
      const response = await ax.get('applicationsProducts');
      dispatch({ type: ApplicationsProductsActionTypes.FETCH_APPLICATIONS_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ApplicationsProductsActionTypes.FETCH_APPLICATIONS_PRODUCT_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

// export const fetchModulesCat = (filterOptions: Array<string>): any => {
//   return async (dispatch: Dispatch<ProductsAction>) => {
//     try {
//       let queryStr;
//       if (filterOptions.length > 0) {
//         queryStr = JSON.stringify(filterOptions);
//       } else {
//         queryStr = '[]';
//       }
//       const response = await ax.get('products/filters?queryStr=' + queryStr);
//       dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data.products });
//       dispatch({ type: ProductsActionTypes.FETCH_STORE_PAGES, payload: response.data.pages });
//       dispatch({ type: ProductsActionTypes.SET_CURRENT_PAGE, payload: 1 });
//     } catch (error) {
//       dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE, payload: 'Ошибка при получении данных' });
//     }
//   };
// };

// export const fetchProductsByCategory = (id: string): any => {
//   return async (dispatch: Dispatch<ProductsAction>) => {
//     try {
//       const response = await ax.get('products/category/' + id);
//       dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data });
//     } catch (error) {
//       dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE, payload: 'Ошибка при получении данных' });
//       errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
//     }
//   };
// };

// export const fetchLastFourProducts = (): any => {
//   return async (dispatch: Dispatch<ProductsAction>) => {
//     try {
//       const response = await ax.get('products/last');
//       dispatch({ type: ProductsActionTypes.FETCH_LAST_FOUR_PRODUCTS_SUCCESS, payload: response.data });
//     } catch (error) {
//       dispatch({ type: ProductsActionTypes.FETCH_LAST_FOUR_PRODUCTS_FAILURE, payload: 'Ошибка при получении данных' });
//       errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
//     }
//   };
// };

// export const setCurrentPage = (currentPage: number): any => {
//   return async (dispatch: Dispatch<ProductsAction>) => {
//     dispatch({ type: ProductsActionTypes.SET_CURRENT_PAGE, payload: currentPage });
//   };
// };

// export const setStoreIsOpened = (storeIsOpened: boolean): any => {
//   return async (dispatch: Dispatch<ProductsAction>) => {
//     dispatch({ type: ProductsActionTypes.SET_STORE_IS_OPENED, payload: storeIsOpened });
//   };
// };

// export const fetchCurrentProduct = (id: string): any => {
//   return async (dispatch: Dispatch<ProductsAction>) => {
//     try {
//       const response = await ax.get(`products/${id}`);
//       dispatch({ type: ProductsActionTypes.FETCH_CURRENT_PRODUCT_SUCCESS, payload: response.data });
//     } catch (error) {
//       dispatch({ type: ProductsActionTypes.FETCH_CURRENT_PRODUCT_FAILURE, payload: 'Ошибка при получении данных' });
//       errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
//       dispatch({ type: ProductsActionTypes.FETCH_STORE_PAGES_ERROR, payload: 'Ошибка при получении данных' });
//       errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
//     }
//   };
// };

// export const fetchProductsOfUser = (id: string): any => {
//   return async (dispatch: Dispatch<ProductsAction>) => {
//     try {
//       const response = await ax.get('products?user=' + id);
//       dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_OF_USER_SUCCESS, payload: response.data });
//     } catch (error) {
//       dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_OF_USER_FAILURE, payload: 'Ошибка при получении данных' });
//       errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
//     }
//   };
// };

// export const createProduct = (product: any) => {
//   return async () => {
//     try {
//       await ax.post('products', product);
//       notification.success({
//         message: 'Успех!',
//         description: 'Продукт успешно создан!',
//       });
//     } catch (error) {
//       errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
//     }
//   };
// };
