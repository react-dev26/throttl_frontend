import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import NavMenu from '../index';

test('Renders a div', () => {
  const component = shallow(<NavMenu />);
  expect(component).toBeA('div');
});
