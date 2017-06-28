import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import DetailPage from '../index';

test('Renders a div', () => {
  const component = shallow(<DetailPage />);
  expect(component).toBeA('div');
});
