import { createAction } from 'redux-actions';
import {
  LOAD_SPECIFICATIONS,
  SET_SPECIFICATIONS,
  LOAD_SPECIFICATION,
  CURRENT_SPECIFICATION,
} from './constants';

export const loadSpecifications = createAction(
  LOAD_SPECIFICATIONS,
);

export const setSpecifications = createAction(
  SET_SPECIFICATIONS,
);
export const loadSpecification = createAction(
  LOAD_SPECIFICATION,
  specificationId => ({ specificationId }),
);
export const currentSpecification = createAction(
  CURRENT_SPECIFICATION,
);
