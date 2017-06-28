import { createSelector } from 'reselect';

const specificationsSelector = state => state.get('specifications');
const specificationsInfoSelector = createSelector([specificationsSelector], specifications => specifications.get('specifications'));
const currentSpecificationSelector = createSelector([specificationsSelector], specifications => specifications.get('currentSpecification'));

export {
  specificationsSelector,
  specificationsInfoSelector,
  currentSpecificationSelector,
};
