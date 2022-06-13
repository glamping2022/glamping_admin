export enum UserActionTypes {
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR = 'SIGN_UP_ERROR',

  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',

  SIGN_CHANGE_SUCCESS = 'SIGN_CHANGE_SUCCESS',
  SIGN_CHANGE_ERROR = 'SIGN_CHANGE_ERROR',

  LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
  LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR',

  SEND_ACTIVATION_SUCCESS = 'SEND_ACTIVATION_SUCCESS',
  SEND_ACTIVATION_ERROR = 'SEND_ACTIVATION_ERROR',
}

export interface IUser {
  _id: string;
  username: string;
  userSurname: string;
  // token: string;
  role: string;
  phone: string;
  email: string;
  // description: string;
  isActivated: boolean;
}

export interface UserState {
  user: null | IUser;
  isAuth: boolean;
  signUpError: null | string;
  signInError: null | string;
  signChangeError: null | string;
  logoutError: null | string;
  sendActivationError: null | string;
}

interface SignUpSuccess {
  type: UserActionTypes.SIGN_UP_SUCCESS;
}

interface SignUpError {
  type: UserActionTypes.SIGN_UP_ERROR;
  payload: string;
}

interface SignChangeSuccess {
  type: UserActionTypes.SIGN_CHANGE_SUCCESS;
}

interface SignChangeError {
  type: UserActionTypes.SIGN_CHANGE_ERROR;
  payload: string;
}

interface SignInSuccess {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: IUser;
}

interface SignInError {
  type: UserActionTypes.SIGN_IN_ERROR;
  payload: string;
}

interface LogoutSuccess {
  type: UserActionTypes.LOGOUT_USER_SUCCESS;
}

interface LogoutError {
  type: UserActionTypes.LOGOUT_USER_ERROR;
  payload: string;
}

interface sendActivationSuccess {
  type: UserActionTypes.SEND_ACTIVATION_SUCCESS;
}

interface sendActivationError {
  type: UserActionTypes.SEND_ACTIVATION_ERROR;
  payload: string;
}

export type UserAction =
  | SignUpSuccess
  | SignUpError
  | SignChangeSuccess
  | SignChangeError
  | SignInSuccess
  | SignInError
  | LogoutSuccess
  | LogoutError
  | sendActivationSuccess
  | sendActivationError;
