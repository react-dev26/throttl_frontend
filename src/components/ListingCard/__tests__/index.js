import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import ListingCard from '../index';

test('Renders a div', () => {
  const component = shallow(<ListingCard />);
  expect(component).toBeA('div');
});
