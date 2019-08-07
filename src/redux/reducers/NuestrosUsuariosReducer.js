import {
  FETCH_NUESTROSUSUARIOS_BEGIN,
  FETCH_NUESTROSUSUARIOS_SUCCESS,
  FETCH_NUESTROSUSUARIOS_FAILURE,
} from '../actions/types';

const initialState = {
  usuarios: [],
  loading: false,
  error: null,
};

function FormacionReducer(state = initialState, action) {
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
        usuarios: action.payload.usuarios,
      };

    case FETCH_NUESTROSUSUARIOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        usuarios: [],
      };

    default:
      return state;
  }
}

export default FormacionReducer;
