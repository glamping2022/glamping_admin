import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
  getUserFromLocalStorage,
  setUserToLocalStorage,
} from '../helpers/localStorage';
// import accommodationsReducer from './reducers/accommodationReducer';
// import categoriesReducer from './reducers/categoriesReducer';
// import factoriesReducer from './reducers/factoriesReducer';
import locationReducer from './reducers/locationsReducer';
// import pichesReducer from './reducers/pichesReducer';
// import productApplicationsReducer from './reducers/productApplicationReducer';
// import productsReducer from './reducers/productsReducer';
// import reservationsReducer from './reducers/reservationsReducer';
// import reviewsReducer from './reducers/reviewsReducer';
// import sharingReducer from './reducers/sharingReducer';
import usersReducer from './reducers/usersReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  // products: productsReducer,
  locations: locationReducer,
  // categories: categoriesReducer,
  // factories: factoriesReducer,
  // reservations: reservationsReducer,
  // piches: pichesReducer,
  // reviews: reviewsReducer,
  // accommodations: accommodationsReducer,
  // productApplications: productApplicationsReducer,
  // sharing: sharingReducer,
  router: connectRouter(history),
});
export type rootState = ReturnType<typeof rootReducer>;

const middleware = [thunkMiddleware, routerMiddleware(history)];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const users = getUserFromLocalStorage();

const store = createStore(rootReducer, users, enhancers);

// console.log('createStore(rootReducer, users, enhancers) '+store.getState().users+' '+(new Date()).toISOString());

store.subscribe(() => setUserToLocalStorage({ users: store.getState().users }));

export default store;
