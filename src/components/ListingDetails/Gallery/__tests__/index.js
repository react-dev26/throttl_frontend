import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import MotoGallery from '../index';

test('Renders a div', () => {
  const component = shallow(<MotoGallery />);
  expect(component).toBeA('div');
});
