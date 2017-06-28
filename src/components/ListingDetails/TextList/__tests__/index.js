import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import TextList from '../index';

test('Renders a div', () => {
  const component = shallow(<TextList />);
  expect(component).toBeA('div');
});
