/**
 * Handles required setup before running AVA tests.
 */

import { jsdom } from 'jsdom';

global.document = jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;

process.env.NODE_ENV = 'test';

/**
 * AVA is unable to process these file types and will raise errors if they are not null.
 * These file types should have no bearing on our tests anyways.
 */

function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.md'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.jpeg'] = noop;
require.extensions['.gif'] = noop;
