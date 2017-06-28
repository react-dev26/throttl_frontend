import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import Responsive from '../index';

test('Renders a MediaQuery', () => {
  const component = shallow(<Responsive />);
  expect(component).toBeA('MediaQuery');
});
