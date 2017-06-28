import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import NotReadyPage from '../index';

test('Renders a div', () => {
  const component = shallow(<NotReadyPage />);
  expect(component).toBeA('div');
});
