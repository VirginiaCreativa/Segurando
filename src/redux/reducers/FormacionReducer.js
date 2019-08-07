import {
  FETCH_FORMACION_BEGIN,
  FETCH_FORMACION_SUCCESS,
  FETCH_FORMACION_FAILURE,
} from '../actions/types';

const initialState = {
  formaciones: [],
  loading: false,
  error: null,
};

function NuestrosUsuariosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORMACION_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_FORMACION_SUCCESS:
      return {
        ...state,
        loading: false,
        formaciones: action.payload.formacion,
      };

    case FETCH_FORMACION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        formaciones: [],
      };

    default:
      return state;
  }
}

export default NuestrosUsuariosReducer;
