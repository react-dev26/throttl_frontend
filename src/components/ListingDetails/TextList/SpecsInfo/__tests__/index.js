import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import SpecsInfo from '../index';

test('Renders a div', () => {
  const component = shallow(<SpecsInfo />);
  expect(component).toBeA('div');
});
