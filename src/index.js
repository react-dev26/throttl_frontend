import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { fromJS } from 'immutable';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider } from 'react-redux';

import colors from 'styles/colors';
import configureStore from 'setup/store';
import Router from './setup/Router';

injectTapEventPlugin();
const muiTheme = getMuiTheme({
  appBar: {
    color: colors.primary,
  },
});

const initialState = fromJS({});
const store = configureStore(initialState);

function renderApp(Component) {
  render(
    <AppContainer>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <Component />
        </Provider>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root'),
  );
}

renderApp(Router);

if (module.hot) {
  module.hot.accept('./setup/Router/index.js', () => {
    const NewApp = require('./setup/Router/index.js').default;
    renderApp(NewApp);
  });
}
