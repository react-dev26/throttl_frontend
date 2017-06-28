import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  SET_USERS,
  CURRENT_USER,
} from './constants';

const initialState = fromJS({
  users: [],
  currentUser: 0,
});

export default handleActions({
  [SET_USERS]: (state, action) =>
     state.set('users', fromJS(action.payload)),
  [CURRENT_USER]: (state, action) =>
    state.set('users', fromJS(action.payload)),
}, initialState);
