import userData from 'reducers/userData';
import skills from 'reducers/skills';
import path from 'reducers/path';
import confidential from 'reducers/confidential';
import appState from 'reducers/appState';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  path,
  userData,
  skills,
  confidential,
  appState,
});

export default rootReducer;
