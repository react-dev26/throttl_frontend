import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import Info from '../index';

test('Renders a div', () => {
  const component = shallow(<Info />);
  expect(component).toBeA('div');
});
