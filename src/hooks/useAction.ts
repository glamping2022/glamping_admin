import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as AccommodationsActionCreator from '../store/actions/accommodationsAction';
import * as CategoriesActionCreators from '../store/actions/categoriesAction';
import * as FactoryActionCreator from '../store/actions/factoriesAction';
import * as LocationsActionCreators from '../store/actions/locationsAction';
import * as PichActionCreators from '../store/actions/pichesAction';
import * as PitchActionCreator from '../store/actions/pichesAction';
import * as ApplicationsProductActionCreator from '../store/actions/productApplicationAction';
import * as ProductActionCreators from '../store/actions/productsAction';
import * as ReservationsActionCreator from '../store/actions/reservationsAction';
import * as ReviewsActionCreators from '../store/actions/reviewsAction';
import * as SharingPitchActionCreators from '../store/actions/sharingAction';
import * as UserActionCreators from '../store/actions/usersAction';

const ActionCreators = {
  ...UserActionCreators,
  ...ProductActionCreators,
  ...LocationsActionCreators,
  ...CategoriesActionCreators,
  ...FactoryActionCreator,
  ...PichActionCreators,
  ...ReviewsActionCreators,
  ...AccommodationsActionCreator,
  ...ReservationsActionCreator,
  ...ApplicationsProductActionCreator,
  ...SharingPitchActionCreators,
  ...PitchActionCreator,
};

export const useActions = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
