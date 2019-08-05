import { GET_SELECT_LOGO } from '../actions/types';

const initialState = {
  selectLogo: 1,
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECT_LOGO: {
      return {
        ...state,
        selectLogo: action.payload,
      };
    }

    default:
      return state;
  }
};
export default GlobalReducer;
