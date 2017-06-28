import React, { PropTypes, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import { routes } from 'setup/Router';

class Layout extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  componentDidMount() {

  }

  getTopBar = ({ match: { params: { listingId } } }) => {
    let backUrl = null;
    if (listingId) backUrl = '/motorcycles-for-sale';
    return (
      <TopBar
        backUrl={backUrl}
      />
    );
  }
  getFooter = ({ match: { params: { listingId } } }) => {
    let backUrl = null;
    if (listingId) backUrl = '/motorcycles-for-sale';
    return (
      <Footer
        listingId={backUrl}
      />
    );
  }

  render() {
    const { children } = this.props;
    const { getTopBar, getFooter } = this;
    return (
      <div>
        <Switch>
          {
            routes.map(route => <Route key={route.path} component={getTopBar} path={route.path} />)
          }
        </Switch>
        {children}
        <Switch>
          {
            routes.map(route => <Route key={route.path} component={getFooter} path={route.path} />)
          }
        </Switch>
      </div>
    );
  }
}

export default Layout;
