import { createSelector } from 'reselect';

const listingsSelector = state => state.get('listings');
const listingsInfoSelector = createSelector([listingsSelector], listings => listings.get('listings'));
const currentListingSelector = createSelector([listingsSelector], listings => listings.get('currentListing'));
const currentEditStateSelector = createSelector([listingsSelector], listings => listings.get('editState'));
const currentSaveStateSelector = createSelector([listingsSelector], listings => listings.get('editState'));

export {
  listingsSelector,
  listingsInfoSelector,
  currentListingSelector,
  currentEditStateSelector,
  currentSaveStateSelector,
};
