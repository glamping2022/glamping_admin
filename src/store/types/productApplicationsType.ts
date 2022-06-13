import { IProduct } from './productsTypes';
import { IUser } from './users';

export interface IPoduct {
  _id: string;
  title: string;
}

export interface IApplicationProduct {
  _id: string;
  poductId: IProduct;
  userId: IUser;
}

export interface IApplicationsProductState {
  applicationsProducts: Array<IApplicationProduct> | [];
  applicationsProductsOfUser: Array<IApplicationProduct> | [];
  currentApplicationProduct: Partial<IApplicationProduct>;
  error: null | string;
}

export enum ApplicationsProductsActionTypes {
  FETCH_APPLICATIONS_PRODUCT_SUCCESS = 'FETCH_APPLICATIONS_PRODUCT_SUCCESS',
  FETCH_APPLICATIONS_PRODUCT_FAILURE = 'FETCH_APPLICATIONS_PRODUCT_FAILURE',
  FETCH_APPLICATIONS_PRODUCT_USER_SUCCESS = 'FETCH_APPLICATIONS_PRODUCT_USER_SUCCESS',
  FETCH_APPLICATIONS_PRODUCT_USER_FAILURE = 'FETCH_APPLICATIONS_PRODUCT_USER_FAILURE',
  FETCH_CURRENT_APPLICATION_PRODUCT_SUCCESS = 'FETCH_CURRENT_APPLICATION_PRODUCT_SUCCESS',
  FETCH_CURRENT_APPLICATION_PRODUCT_FAILURE = 'FETCH_CURRENT_APPLICATION_PRODUCT_FAILURE',
}

interface IFetchApplicationsProductsSuccessAction {
  type: ApplicationsProductsActionTypes.FETCH_APPLICATIONS_PRODUCT_SUCCESS;
  payload: Array<IApplicationProduct>;
}

interface IFetchApplicationsProductsFailureAction {
  type: ApplicationsProductsActionTypes.FETCH_APPLICATIONS_PRODUCT_FAILURE;
  payload: string;
}

interface IFetchApplicationsProductsUserSuccessAction {
  type: ApplicationsProductsActionTypes.FETCH_APPLICATIONS_PRODUCT_USER_SUCCESS;
  payload: Array<IApplicationProduct>;
}

interface IFetchApplicationsProductsUserFailureAction {
  type: ApplicationsProductsActionTypes.FETCH_APPLICATIONS_PRODUCT_USER_FAILURE;
  payload: string;
}

interface IFetchCurrentApplicationProductSuccessAction {
  type: ApplicationsProductsActionTypes.FETCH_CURRENT_APPLICATION_PRODUCT_SUCCESS;
  payload: IApplicationProduct;
}

interface IFetchCurrentApplicationProductFailureAction {
  type: ApplicationsProductsActionTypes.FETCH_CURRENT_APPLICATION_PRODUCT_FAILURE;
  payload: string;
}

export type ApplicationsProductsAction =
  | IFetchApplicationsProductsSuccessAction
  | IFetchApplicationsProductsFailureAction
  | IFetchApplicationsProductsUserSuccessAction
  | IFetchApplicationsProductsUserFailureAction
  | IFetchCurrentApplicationProductSuccessAction
  | IFetchCurrentApplicationProductFailureAction;
