import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  SET_LISTINGS,
  CURRENT_LISTING,
  EDIT_SPECIFICATION,
  SAVE_SPECIFICATION,
} from './constants';

const initialState = fromJS({
  listings: [],
  currentListing: {},
  editState: false,
});

export default handleActions({
  [SET_LISTINGS]: (state, action) =>
     state.set('listings', fromJS(action.payload)),
  [CURRENT_LISTING]: (state, action) =>
     state.set('currentListing', fromJS(action.payload)),
  [EDIT_SPECIFICATION]: state =>
     state.set('editState', true),
  [SAVE_SPECIFICATION]: state =>
     state.set('editState', false),
}, initialState);
