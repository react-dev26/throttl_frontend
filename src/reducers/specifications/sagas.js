import { put, call, takeLatest } from 'redux-saga/effects';

import {
  LOAD_SPECIFICATIONS,
  LOAD_SPECIFICATION,
} from './constants';

import {
  loadSpecifications,
  loadSpecification,
} from './api';

import {
  setSpecifications,
  currentSpecification,
} from './actions';

function* asyncLoadSpecifications() {
  const response = yield call(loadSpecifications);
  yield put(setSpecifications(response.items));
}
function* asyncLoadSpecification(action) {
  const response = yield call(loadSpecification, action.payload.specificationId);
  yield put(currentSpecification(response));
}
export function* getSpecifications() {
  yield takeLatest(LOAD_SPECIFICATIONS, asyncLoadSpecifications);
}
export function* getSpecification() {
  yield takeLatest(LOAD_SPECIFICATION, asyncLoadSpecification);
}

export default [
  getSpecifications(),
  getSpecification(),
];
