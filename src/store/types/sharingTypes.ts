import { IUser } from './users';

export interface IPich {
  _id: string;
  numer: string;
}

export interface ISharingPitch {
  _id: string;
  title: string;
  pichId: IPich;
  startDate: string;
  endDate: string;
  userId: IUser;
  rating: number;
  image: Array<string>;
  description: string;
  rent: string;
  status: boolean;
  published: boolean;
  reviewsQuantity: number;
}

export interface ISharingPitchState {
  sharingPitch: Array<ISharingPitch> | [];
  sharingPitchOfUser: Array<ISharingPitch> | [];
  currentSharingPitch: Partial<ISharingPitch>;
  error: null | string;
}

export enum SharingPitchActionTypes {
  FETCH_SHARING_PITCH_SUCCESS = 'FETCH_SHARING_PITCH_SUCCESS',
  FETCH_SHARING_PITCH_FAILURE = 'FETCH_SHARING_PITCH_FAILURE',
  FETCH_SHARING_PITCH_USER_SUCCESS = 'FETCH_SHARING_PITCH_USER_SUCCESS',
  FETCH_SHARING_PITCH_USER_FAILURE = 'FETCH_SHARING_PITCH_USER_FAILURE',
  FETCH_CURRENT_SHARING_PITCH_SUCCESS = 'FETCH_CURRENT_SHARING_PITCH_SUCCESS',
  FETCH_CURRENT_SHARING_PITCH_FAILURE = 'FETCH_CURRENT_SHARING_PITCH_FAILURE',
}

interface IFetchSharingPitchSuccessAction {
  type: SharingPitchActionTypes.FETCH_SHARING_PITCH_SUCCESS;
  payload: Array<ISharingPitch>;
}

interface IFetchSharingPitchFailureAction {
  type: SharingPitchActionTypes.FETCH_SHARING_PITCH_FAILURE;
  payload: string;
}

interface IFetchSharingPitchUserSuccessAction {
  type: SharingPitchActionTypes.FETCH_SHARING_PITCH_USER_SUCCESS;
  payload: Array<ISharingPitch>;
}

interface IFetchSharingPitchUserFailureAction {
  type: SharingPitchActionTypes.FETCH_SHARING_PITCH_USER_FAILURE;
  payload: string;
}

interface IFetchCurrentSharingPitchSuccessAction {
  type: SharingPitchActionTypes.FETCH_CURRENT_SHARING_PITCH_SUCCESS;
  payload: ISharingPitch;
}

interface IFetchCurrentSharingPitchFailureAction {
  type: SharingPitchActionTypes.FETCH_CURRENT_SHARING_PITCH_FAILURE;
  payload: string;
}

export type SharingPitchAction =
  | IFetchSharingPitchSuccessAction
  | IFetchSharingPitchFailureAction
  | IFetchSharingPitchUserSuccessAction
  | IFetchSharingPitchUserFailureAction
  | IFetchCurrentSharingPitchSuccessAction
  | IFetchCurrentSharingPitchFailureAction;
