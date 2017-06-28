import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import TopBar from '../index';

test('Renders a AppBar', () => {
  const component = shallow(<TopBar />);
  expect(component).toBeA('AppBar');
});
