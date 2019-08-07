import {
  FETCH_NUESTROSUSUARIOS_BEGIN,
  FETCH_NUESTROSUSUARIOS_SUCCESS,
  FETCH_NUESTROSUSUARIOS_FAILURE,
} from '../actions/types';

const initialState = {
  nuestrosusuarios: [],
  loading: false,
  error: null,
};

function NuestrosUsuariosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NUESTROSUSUARIOS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_NUESTROSUSUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        nuestrosusuarios: action.payload.nusuarios,
      };

    case FETCH_NUESTROSUSUARIOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        nuestrosusuarios: [],
      };

    default:
      return state;
  }
}

export default NuestrosUsuariosReducer;
