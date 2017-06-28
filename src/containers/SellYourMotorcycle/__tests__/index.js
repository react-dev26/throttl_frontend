import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import SellYourMotorcycle from '../index';

// let temp = null;
test('Renders a div', () => {
  const component = shallow(<SellYourMotorcycle />);
  expect(component).toBeA('div');
});
