import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import GetButton from '../index';

test('Renders a div', () => {
  const component = shallow(<GetButton />);
  expect(component).toBeA('div');
});
