import { API } from 'setup/config';

export function loadUsers() {
  return fetch(`${API}users`)
    .then(res => res.json());
}
export function loadUser() {
  return fetch(`${API}users/1`)
    .then(res => res.json());
}
export default {
  loadUsers,
  loadUser,
};
