/**
 * This file can (and should) be imported by any test files in the
 * project. It provides a simpler way to import various commonly-used
 * functions from various modules, and also performs some global
 * setup (e.g. linking in extensions to Enzyme).
 *
 * Most test files will then have imports that look something like this:
 *    import React from 'react';
 *    import { test, expect, shallow } from '__tests__/helpers/test-setup';
 */

import expectHelper from 'expect';
import enzymify from 'expect-enzyme';
import expectJSX from 'expect-jsx';

expectHelper.extend(expectJSX);
expectHelper.extend(enzymify);

export test from 'ava';
export { shallow, mount } from 'enzyme';
export const expect = expectHelper;
export { spyOn, createSpy } from 'expect';
