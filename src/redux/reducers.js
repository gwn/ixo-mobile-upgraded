import { combineReducers } from 'redux';
import { ixoReducer } from './ixo/reducers';
import { userReducer } from './user/reducers';

export default combineReducers({
  ixo: ixoReducer,
  user: userReducer,
});
