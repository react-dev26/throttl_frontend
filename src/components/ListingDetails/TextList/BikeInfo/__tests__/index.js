import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import DetailsBike from '../index';

test('Renders a div', () => {
  const component = shallow(<DetailsBike />);
  expect(component).toBeA('div');
});
