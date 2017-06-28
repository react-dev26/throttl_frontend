import { put, call, takeLatest } from 'redux-saga/effects';

import {
  LOAD_LISTINGS,
  LOAD_LISTING,
} from './constants';

import {
  loadListing,
  loadListings,
} from './api';

import {
  setListings,
  currentListing,
} from './actions';

function* asyncLoadListings() {
  const response = yield call(loadListings);
  yield put(setListings(response.items));
}
function* asyncLoadListing(action) {
  const response = yield call(loadListing, action.payload.listingId);
  yield put(currentListing(response));
}
export function* getListings() {
  yield takeLatest(LOAD_LISTINGS, asyncLoadListings);
}
export function* getListing() {
  yield takeLatest(LOAD_LISTING, asyncLoadListing);
}

export default [
  getListings(),
  getListing(),
];
