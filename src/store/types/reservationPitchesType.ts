import { IPich } from './pichesTypes';
import { IUser } from './users';

export interface IReservationPitch {
  _id: string;
  pich: IPich;
  startDate: string;
  endDate: string;
  user: IUser;
}

export interface IReservationsPitchState {
  pitchReservations: Array<IReservationPitch> | [];
  reservations: Array<IReservationPitch> | [];
  reservationsOfUser: Array<IReservationPitch> | [];
  error: null | string;
  reservationsOfLandOwner: Array<IReservationPitch> | [];
}

export enum ReservationsPitchActionTypes {
  FETCH_PITCH_RESERVATIONS_PITCH_SUCCESS = 'FETCH_PITCH_RESERVATIONS_PITCH_SUCCESS',
  FETCH_PITCH_RESERVATIONS_PITCH_FAILURE = 'FETCH_PITCH_RESERVATIONS_PITCH_FAILURE',
  FETCH_RESERVATIONS_PITCH_SUCCESS = 'FETCH_RESERVATIONS_PITCH_SUCCESS',
  FETCH_RESERVATIONS_PITCH_FAILURE = 'FETCH_RESERVATIONS_PITCH_FAILURE',
  FETCH_RESERVATIONS_PITCH_OF_USER_SUCCESS = 'FETCH_RESERVATIONS_PITCH_OF_USER_SUCCESS',
  FETCH_RESERVATIONS_PITCH_OF_USER_FAILURE = 'FETCH_RESERVATIONS_PITCH_OF_USER_FAILURE',
  FETCH_RESERVATIONS_PITCH_OF_LAND_OWNER_SUCCESS = 'FETCH_RESERVATIONS_PITCH_OF_LAND_OWNER_SUCCESS',
  FETCH_RESERVATIONS_PITCH_OF_LAND_OWNER_FAILURE = 'FETCH_RESERVATIONS_PITCH_OF_LAND_OWNER_FAILURE',
}

interface IFetchPitchReservationsPitchSuccessAction {
  type: ReservationsPitchActionTypes.FETCH_PITCH_RESERVATIONS_PITCH_SUCCESS;
  payload: Array<IReservationPitch>;
}

interface IFetchPitchReservationsPitchFailureAction {
  type: ReservationsPitchActionTypes.FETCH_PITCH_RESERVATIONS_PITCH_FAILURE;
  payload: string;
}

interface IFetchReservationsPitchSuccessAction {
  type: ReservationsPitchActionTypes.FETCH_RESERVATIONS_PITCH_SUCCESS;
  payload: Array<IReservationPitch>;
}

interface IFetchReservationsPitchFailureAction {
  type: ReservationsPitchActionTypes.FETCH_RESERVATIONS_PITCH_FAILURE;
  payload: string;
}

interface IFetchReservationsPitchOfUserSuccessAction {
  type: ReservationsPitchActionTypes.FETCH_RESERVATIONS_PITCH_OF_USER_SUCCESS;
  payload: Array<IReservationPitch>;
}

interface IFetchReservationsPitchOfUserFailureAction {
  type: ReservationsPitchActionTypes.FETCH_RESERVATIONS_PITCH_OF_USER_FAILURE;
  payload: string;
}

interface IFetchReservationsPitchOfLandOwnerSuccessAction {
  type: ReservationsPitchActionTypes.FETCH_RESERVATIONS_PITCH_OF_LAND_OWNER_SUCCESS;
  payload: Array<IReservationPitch>;
}

interface IFetchReservationsPitchOfLandOwnerFailureAction {
  type: ReservationsPitchActionTypes.FETCH_RESERVATIONS_PITCH_OF_LAND_OWNER_FAILURE;
  payload: string;
}

export type ReservationsPitchAction =
  | IFetchPitchReservationsPitchSuccessAction
  | IFetchPitchReservationsPitchFailureAction
  | IFetchReservationsPitchSuccessAction
  | IFetchReservationsPitchFailureAction
  | IFetchReservationsPitchOfUserSuccessAction
  | IFetchReservationsPitchOfUserFailureAction
  | IFetchReservationsPitchOfLandOwnerSuccessAction
  | IFetchReservationsPitchOfLandOwnerFailureAction
