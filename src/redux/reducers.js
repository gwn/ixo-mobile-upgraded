import { combineReducers } from 'redux';
import { dynamicsReducer } from './dynamics/reducers';
import { ixoReducer } from './ixo/reducers';
import { projectReducer } from './projects/reducers';
import { userReducer } from './user/reducers';

export default combineReducers({
  ixo: ixoReducer,
  user: userReducer,
  projectsStore: projectReducer,
  dynamicsStore: dynamicsReducer,
});
