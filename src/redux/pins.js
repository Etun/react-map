import { generateRandomPlaces } from '../config/places';

const CHANGE_LOCATION = 'CHANGE_MARKER_LOCATION';

const initialState = {
  currentLocation: '',
  places: generateRandomPlaces(),
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        ...state,
        currentLocation: action.data,
      };
    default:
      return state;
  }
}

export function updateLocation(data) {
  return {
    type: CHANGE_LOCATION,
    data,
  }
}
