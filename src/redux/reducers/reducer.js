import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Global from './GlobalReducer';
import Reactid from './ReactidReducer';
import Formacion from './FormacionReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    Global,
    Reactid,
    Formacion,
  });
