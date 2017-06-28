import listingsSagas from 'reducers/listings/sagas';
import specificationsSagas from 'reducers/specifications/sagas';
import usersSagas from 'reducers/users/sagas';

export default function* rootSaga() {
  yield [
    ...listingsSagas,
    ...specificationsSagas,
    ...usersSagas,
  ];
}
