import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import ActionItem from '../index';

test('Renders a div', () => {
  const component = shallow(<ActionItem />);
  expect(component).toBeA('div');
});
