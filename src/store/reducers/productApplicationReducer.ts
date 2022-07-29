import {
  ApplicationsProductsAction,
  ApplicationsProductsActionTypes,
  IApplicationsProductState,
} from '../types/productApplicationsType';

const initialState: IApplicationsProductState = {
  applicationsProducts: [],
  applicationsProductsOfUser: [],
  currentApplicationProduct: {},
  error: null,
};

const productApplcationsReducer = (state = initialState, action: ApplicationsProductsAction): IApplicationsProductState => {
  switch (action.type) {
    case ApplicationsProductsActionTypes.FETCH_APPLICATIONS_PRODUCT_SUCCESS:
      return { ...state, applicationsProducts: action.payload };
    case ApplicationsProductsActionTypes.FETCH_APPLICATIONS_PRODUCT_FAILURE:
      return { ...state, error: action.payload };
    case ApplicationsProductsActionTypes.FETCH_APPLICATIONS_PRODUCT_USER_SUCCESS:
      return { ...state, applicationsProductsOfUser: action.payload };
    case ApplicationsProductsActionTypes.FETCH_APPLICATIONS_PRODUCT_USER_FAILURE:
      return { ...state, error: action.payload };
    case ApplicationsProductsActionTypes.FETCH_CURRENT_APPLICATION_PRODUCT_SUCCESS:
      return { ...state, currentApplicationProduct: action.payload };
    case ApplicationsProductsActionTypes.FETCH_CURRENT_APPLICATION_PRODUCT_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productApplcationsReducer;
