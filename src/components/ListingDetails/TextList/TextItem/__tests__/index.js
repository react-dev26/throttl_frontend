import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import TextItem from '../index';

test('Renders a div', () => {
  const component = shallow(<TextItem />);
  expect(component).toBeA('div');
});
