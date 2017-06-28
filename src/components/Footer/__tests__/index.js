import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import Footer from '../index';

test('Renders a div', () => {
  const component = shallow(<Footer action="test" />);
  expect(component).toBeA('div');
});
