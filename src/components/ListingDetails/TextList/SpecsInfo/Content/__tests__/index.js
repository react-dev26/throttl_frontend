import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import DetailsContent from '../index';

test('Renders a div', () => {
  const component = shallow(<DetailsContent />);
  expect(component).toBeA('div');
});
