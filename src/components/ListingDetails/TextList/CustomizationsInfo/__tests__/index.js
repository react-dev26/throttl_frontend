import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import CustomizationsInfo from '../index';

test('Renders a div', () => {
  const component = shallow(<CustomizationsInfo />);
  expect(component).toBeA('div');
});
