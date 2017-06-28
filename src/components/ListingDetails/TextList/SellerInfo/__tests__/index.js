import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import SellerInfo from '../index';

test('Renders a div', () => {
  const component = shallow(<SellerInfo />);
  expect(component).toBeA('div');
});
