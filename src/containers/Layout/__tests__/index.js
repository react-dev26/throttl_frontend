import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import Layout from '../index';

// let temp = null;
test('Renders a div', () => {
  const component = shallow(<Layout />);
  expect(component).toBeA('div');
});
