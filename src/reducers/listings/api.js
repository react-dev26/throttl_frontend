import { API } from 'setup/config';

export function loadListings() {
  return fetch(`${API}listings`)
    .then(res => res.json());
}
export function loadListing(listingId) {
  return fetch(`${API}listings/${listingId}`)
    .then(res => res.json());
}
export default {
  loadListings,
  loadListing,
};
