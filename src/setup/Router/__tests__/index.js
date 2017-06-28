import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import Router from '../index';

test('Renders a BrowserRouter', () => {
  const component = shallow(<Router />);
  expect(component).toBeA('BrowserRouter');
});
