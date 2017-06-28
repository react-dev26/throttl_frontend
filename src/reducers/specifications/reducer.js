import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  SET_SPECIFICATIONS,
  CURRENT_SPECIFICATION,
} from './constants';

const initialState = fromJS({
  specifications: [],
  currentSpecification: {},
});

export default handleActions({
  [SET_SPECIFICATIONS]: (state, action) =>
     state.set('specifications', fromJS(action.payload)),
  [CURRENT_SPECIFICATION]: (state, action) =>
     state.set('currentSpecification', fromJS(action.payload)),
}, initialState);
