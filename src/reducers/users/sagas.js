import { put, call, takeLatest } from 'redux-saga/effects';

import {
  LOAD_USERS,
  LOAD_USER,
} from './constants';

import {
  loadUsers,
  loadUser,
} from './api';

import {
  setUsers,
  currentUser,
} from './actions';

function* asyncLoadUsers() {
  const response = yield call(loadUsers);
  yield put(setUsers(response));
  console.log('resoinsie_users', response);
}
function* asyncLoadUser() {
  const response = yield call(loadUser);
  console.log(response);
  yield put(currentUser(response));
}
export function* getUsers() {
  yield takeLatest(LOAD_USERS, asyncLoadUsers);
}
export function* getUser() {
  yield takeLatest(LOAD_USER, asyncLoadUser);
}

export default [
  getUsers(),
  getUser(),
];
