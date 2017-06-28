import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import MaintenanceInfo from '../index';

test('Renders a div', () => {
  const component = shallow(<MaintenanceInfo />);
  expect(component).toBeA('div');
});
