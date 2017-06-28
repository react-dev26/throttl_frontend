import { createSelector } from 'reselect';

const usersSelector = state => state.get('users');
const usersInfoSelector = createSelector([usersSelector], users => users.get('users'));
const currentUsersSelector = createSelector([usersSelector], users => users.getIn([users, users.get('currentUser')]));
const userSelector = state => state.get('users');
const userInfoSelector = createSelector([usersSelector], users => users.get('users'));

export {
  usersSelector,
  usersInfoSelector,
  currentUsersSelector,
  userSelector,
  userInfoSelector,
};
