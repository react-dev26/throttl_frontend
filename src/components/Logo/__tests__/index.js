import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import Logo from '../index';

test('Renders a img', () => {
  const component = shallow(<Logo />);
  expect(component).toBeA('img');
});
