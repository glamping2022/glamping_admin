/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { notification } from 'antd';
import { Dispatch } from 'redux';

import ax from '../../settings/axios-glamping';
import { errNotify } from '../exceptions/api-error';
import {
  ReviewsAction,
  ReviewsActionTypes,
} from '../types/reviewsTypes';

export const fetchReviews = (productId: string): any => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get(`/reviews/pages?product=${productId}`);
      dispatch({
        type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS,
        payload: response.data.reviews,
        page: response.data.page,
      });
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEW_PAGES, payload: response.data.pages });
    } catch (error) {
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEWS_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEW_PAGES_ERROR, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchAllReviews = (): any => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get('reviews');
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEWS_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchReviewsOfUser = (userId: string): any => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get(`/reviews?user=${userId}`);
      dispatch({
        type: ReviewsActionTypes.FETCH_REVIEWS_OF_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ReviewsActionTypes.FETCH_REVIEWS_OF_USER_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchNextReviewPages = (currentPage: number, productId: string) => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get(`reviews/pages?product=${productId}&page=${currentPage}`);
      dispatch({
        type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS,
        payload: response.data.reviews,
        page: response.data.page,
      });
    } catch (error) {
      dispatch({ type: ReviewsActionTypes.FETCH_REVIEWS_FAILURE, payload: 'Ошибка при получении данных' });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const setReviewsCurrentPage = (currentPage: number): any => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    dispatch({ type: ReviewsActionTypes.SET_CURRENT_PAGE, payload: currentPage });
  };
};

export const setAccommodationsCurrentPage = (currentPage: number): any => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    dispatch({ type: ReviewsActionTypes.SET_CURRENT_ACCOMMODATION_PAGE, payload: currentPage });
  };
};

export const createReview = (state: any) => {
  return async () => {
    try {
      await ax.post('reviews', state);
      notification.success({
        message: 'Успех!',
        description: 'Комментарий успешно создан!',
      });
    } catch (error) {
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchAccommodationReviews = (accommodationId: string): any => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get(`/reviews/pages?accommodation=${accommodationId}`);
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEWS_SUCCESS,
        payload: response.data.accommodationReviews,
        page: response.data.page,
      });
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEW_PAGES,
        payload: response.data.accommodationReviewPages,
      });
    } catch (error) {
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEWS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEW_PAGES_ERROR,
        payload: 'Ошибка при получении данных',
      });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};

export const fetchNextAccommodationReviewPages = (currentPage: number, accommodationId: string) => {
  return async (dispatch: Dispatch<ReviewsAction>) => {
    try {
      const response = await ax.get(`reviews/pages?accommodation=${accommodationId}&page=${currentPage}`);
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEWS_SUCCESS,
        payload: response.data.accommodationReviews,
        page: response.data.page,
      });
    } catch (error) {
      dispatch({
        type: ReviewsActionTypes.FETCH_ACCOMMODATION_REVIEWS_FAILURE,
        payload: 'Ошибка при получении данных',
      });
      errNotify('Неудача!', 'Произошла ошибка при получении данных!', error);
    }
  };
};
