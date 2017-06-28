import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import MyMessages from '../index';

// let temp = null;
test('Renders a div', () => {
  const component = shallow(<MyMessages />);
  expect(component).toBeA('div');
});
