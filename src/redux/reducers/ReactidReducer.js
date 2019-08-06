import {
  FETCH_REACTID_BEGIN,
  FETCH_REACTID_SUCCESS,
  FETCH_REACTID_FAILURE,
} from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REACTID_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_REACTID_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.reactid,
      };

    case FETCH_REACTID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
}
