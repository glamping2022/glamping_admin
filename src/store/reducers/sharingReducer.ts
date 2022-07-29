import {
  ISharingPitchState,
  SharingPitchAction,
  SharingPitchActionTypes,
} from '../types/sharingTypes';

const initialState: ISharingPitchState = {
  sharingPitch: [],
  sharingPitchOfUser: [],
  currentSharingPitch: {},
  error: null,
};

const sharingReducer = (state = initialState, action: SharingPitchAction): ISharingPitchState => {
  switch (action.type) {
    case SharingPitchActionTypes.FETCH_SHARING_PITCH_SUCCESS:
      return { ...state, sharingPitch: action.payload };
    case SharingPitchActionTypes.FETCH_SHARING_PITCH_FAILURE:
      return { ...state, error: action.payload };
    case SharingPitchActionTypes.FETCH_SHARING_PITCH_USER_SUCCESS:
      return { ...state, sharingPitchOfUser: action.payload };
    case SharingPitchActionTypes.FETCH_SHARING_PITCH_USER_FAILURE:
      return { ...state, error: action.payload };
    case SharingPitchActionTypes.FETCH_CURRENT_SHARING_PITCH_SUCCESS:
      return { ...state, currentSharingPitch: action.payload };
    case SharingPitchActionTypes.FETCH_CURRENT_SHARING_PITCH_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default sharingReducer;
