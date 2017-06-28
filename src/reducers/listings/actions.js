import { createAction } from 'redux-actions';
import {
  LOAD_LISTINGS,
  SET_LISTINGS,
  LOAD_LISTING,
  CURRENT_LISTING,
  EDIT_SPECIFICATION,
  SAVE_SPECIFICATION,
} from './constants';

export const loadListings = createAction(
  LOAD_LISTINGS,
);

export const setListings = createAction(
  SET_LISTINGS,
);
export const loadListing = createAction(
  LOAD_LISTING,
  listingId => ({ listingId }),
);
export const currentListing = createAction(
  CURRENT_LISTING,
);
export const handleEditState = createAction(
  EDIT_SPECIFICATION,
);
export const handleSaveState = createAction(
  SAVE_SPECIFICATION,
);
