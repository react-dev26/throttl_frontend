import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import MainImage from '../index';

test('Renders a div', () => {
  const component = shallow(<MainImage />);
  expect(component).toBeA('div');
});
