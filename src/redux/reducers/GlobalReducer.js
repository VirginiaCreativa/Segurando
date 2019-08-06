import { GET_SELECT_LOGO } from '../actions/types';

const initialState = {
  selectsColor: 1,
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECT_LOGO: {
      return {
        ...state,
        selectsColor: action.payload,
      };
    }

    default:
      return state;
  }
};
export default GlobalReducer;
