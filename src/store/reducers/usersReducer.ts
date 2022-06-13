import { UserAction, UserActionTypes, UserState } from '../types/users';

const initialState: UserState = {
  user: null,
  isAuth: false,
  signUpError: null,
  signInError: null,
  signChangeError: null,
  sendActivationError: null,
  logoutError: null,
};

const reducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        signUpError: null,
        signInError: null,
        signChangeError: null,
        sendActivationError: null,
        logoutError: null,
      };
    case UserActionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        user: null,
        isAuth: false,
        signInError: action.payload,
        signUpError: null,
        signChangeError: null,
        sendActivationError: null,
        logoutError: null,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpError: null,
        signInError: null,
        signChangeError: null,
        sendActivationError: null,
        logoutError: null,
      };
    case UserActionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
        signInError: null,
        signChangeError: null,
        sendActivationError: null,
        logoutError: null,
      };
    case UserActionTypes.SIGN_CHANGE_SUCCESS:
      return {
        ...state,
        signUpError: null,
        signInError: null,
        signChangeError: null,
        sendActivationError: null,
        logoutError: null,
      };
    case UserActionTypes.SIGN_CHANGE_ERROR:
      return {
        ...state,
        signChangeError: action.payload,
        signUpError: null,
        signInError: null,
        sendActivationError: null,
        logoutError: null,
      };
    case UserActionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        isAuth: false,
        signUpError: null,
        signInError: null,
        signChangeError: null,
        sendActivationError: null,
        logoutError: null,
      };
    case UserActionTypes.LOGOUT_USER_ERROR:
      return {
        ...state,
        user: null,
        isAuth: false,
        logoutError: action.payload,
        signUpError: null,
        signInError: null,
        signChangeError: null,
        sendActivationError: null,
      };
    case UserActionTypes.SEND_ACTIVATION_SUCCESS:
      return {
        ...state,
        signUpError: null,
        signInError: null,
        signChangeError: null,
        sendActivationError: null,
        logoutError: null,
      };
    case UserActionTypes.SEND_ACTIVATION_ERROR:
      return {
        ...state,
        sendActivationError: action.payload,
        signInError: null,
        signChangeError: null,
        signUpError: null,
        logoutError: null,
      };
    default:
      return state;
  }
};

export default reducer;
