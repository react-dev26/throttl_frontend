import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import MyMotorcycles from '../index';

// let temp = null;
test('Renders a div', () => {
  const component = shallow(<MyMotorcycles />);
  expect(component).toBeA('div');
});
