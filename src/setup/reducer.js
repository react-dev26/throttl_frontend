import { combineReducers } from 'redux-immutable';
import listingsReducer from 'reducers/listings/reducer';
import specificationsReducer from 'reducers/specifications/reducer';
import usersReducer from 'reducers/users/reducer';

export default function createReducer() {
  return combineReducers({
    listings: listingsReducer,
    specifications: specificationsReducer,
    users: usersReducer,
  });
}
