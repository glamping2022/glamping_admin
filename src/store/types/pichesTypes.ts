export interface IPich {
  _id: string;
  title: string;
  number: string;
  productId: string;
  locationId: string | any;
  roominess: number;
  season: string;
  image: Array<string>;
  rent: string;
  free: boolean;
  startDate: string;
  endDate: string;
  userId: string;
  description: string;
  published: boolean;
  rating: number;
  preview: string;
}

export interface IPichesState {
  piches: Array<IPich> | [];
  lastFourPiches: Array<IPich> | [];
  currentPitch: Partial<IPich>;
  error: null | string;
}

export enum PichesActionTypes {
  FETCH_LAST_FOUR_PICHES_SUCCESS = 'FETCH_LAST_FOUR_PICHES_SUCCESS',
  FETCH_LAST_FOUR_PICHES_FAILURE = 'FETCH_LAST_FOUR_PICHES_FAILURE',
  FETCH_PICHES_LOCATIONID_SUCCESS = 'FETCH_PICHES_LOCATIONID_SUCCESS',
  FETCH_PICHES_LOCATIONID_FAILURE = 'FETCH_PICHES_LOCATIONID_FAILURE',
  FETCH_CURRENT_PITCH_SUCCESS = 'FETCH_CURRENT_PITCH_SUCCESS',
  FETCH_CURRENT_PITCH_FAILURE = 'FETCH_CURRENT_PITCH_FAILURE',
}

interface IFetchLastFourPichesSuccessAction {
  type: PichesActionTypes.FETCH_LAST_FOUR_PICHES_SUCCESS;
  payload: Array<IPich>;
}

interface IFetchLastFourPichesFailureAction {
  type: PichesActionTypes.FETCH_LAST_FOUR_PICHES_FAILURE;
  payload: string;
}

interface IFetchLocationIdPichesSuccessAction {
  type: PichesActionTypes.FETCH_PICHES_LOCATIONID_SUCCESS;
  payload: Array<IPich>;
}

interface IFetchLocationIdPichesFailureAction {
  type: PichesActionTypes.FETCH_PICHES_LOCATIONID_FAILURE;
  payload: string;
}

interface IFetchCurrentIdPitchSuccessAction {
  type: PichesActionTypes.FETCH_CURRENT_PITCH_SUCCESS;
  payload: IPich;
}

interface IFetchCurrentIdPitchFailureAction {
  type: PichesActionTypes.FETCH_CURRENT_PITCH_FAILURE;
  payload: string;
}

export type PichesAction =
  | IFetchLastFourPichesSuccessAction
  | IFetchLastFourPichesFailureAction
  | IFetchLocationIdPichesSuccessAction
  | IFetchLocationIdPichesFailureAction
  | IFetchCurrentIdPitchSuccessAction
  | IFetchCurrentIdPitchFailureAction;
