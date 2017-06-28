import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import BuyerSellerChat from '../index';

test('Renders a div', () => {
  const component = shallow(<BuyerSellerChat />);
  expect(component).toBeA('div');
});
