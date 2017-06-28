import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import SubNav from '../index';

test('Renders a div', () => {
  const component = shallow(<SubNav />);
  expect(component).toBeA('div');
});
