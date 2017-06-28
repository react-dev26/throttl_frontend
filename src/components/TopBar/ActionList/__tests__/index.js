import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import ActionList from '../index';

test('Renders a div', () => {
  const component = shallow(<ActionList />);
  expect(component).toBeA('div');
});
