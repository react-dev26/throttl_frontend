import React from 'react';
import { test, expect, shallow } from '__tests__/helpers/test-setup';
import SignupBtnHeader from '../index';

test('Renders a RaisedButton', () => {
  const component = shallow(<SignupBtnHeader />);
  expect(component).toBeA('RaisedButton');
});
