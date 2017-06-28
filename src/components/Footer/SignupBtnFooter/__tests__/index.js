import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import SignupBtnFooter from '../index';

test('Renders a RaisedButton', () => {
  const component = shallow(<SignupBtnFooter />);
  expect(component).toBeA('RaisedButton');
});
