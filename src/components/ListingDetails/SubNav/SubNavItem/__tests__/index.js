import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import SubNavItem from '../index';

test('Renders a div', () => {
  const component = shallow(<SubNavItem />);
  expect(component).toBeA('div');
});
