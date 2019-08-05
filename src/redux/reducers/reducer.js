import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Global from './GlobalReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    Global,
  });
