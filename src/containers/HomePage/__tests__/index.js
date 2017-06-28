import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import { HomePage } from '../index';

test('Renders a div', () => {
  const component = shallow(<HomePage />);
  expect(component).toBeA('div');
});
