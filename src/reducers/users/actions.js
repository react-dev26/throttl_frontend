import { createAction } from 'redux-actions';
import {
  LOAD_USERS,
  SET_USERS,
  LOAD_USER,
  CURRENT_USER,
} from './constants';

export const loadUsers = createAction(
  LOAD_USERS,
);

export const setUsers = createAction(
  SET_USERS,
);
export const loadUser = createAction(
  LOAD_USER,
);
export const currentUser = createAction(
  CURRENT_USER,
  id => ({ id }),
);
