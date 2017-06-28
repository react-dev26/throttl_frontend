import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import Content from '../index';

test('Renders a div', () => {
  const component = shallow(<Content />);
  expect(component).toBeA('div');
});
