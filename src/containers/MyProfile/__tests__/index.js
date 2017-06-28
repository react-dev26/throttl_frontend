import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import MyProfile from '../index';

// let temp = null;
test('Renders a div', () => {
  const component = shallow(<MyProfile />);
  expect(component).toBeA('div');
});
