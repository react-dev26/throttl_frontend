import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from 'containers/Layout';
import HomePage from 'containers/HomePage';
import DetailPage from 'containers/DetailPage';
import SellYourMotorcycle from 'containers/SellYourMotorcycle';
import MyMotorcycles from 'containers/MyMotorcycles';
import MyProfile from 'containers/MyProfile';
import MyMessages from 'containers/MyMessages';

import NotReadyPage from 'containers/NotReadyPage';

export const routes = [
  { path: '/motorcycles-for-sale/:listingId', component: DetailPage },
  { path: '/sell-motorcycle', component: SellYourMotorcycle },
  { path: '/my-motorcycles', component: MyMotorcycles },
  { path: '/my-profile', component: MyProfile },
  { path: '/my-messages', component: MyMessages },
  { path: '/motorcycles-for-sale', component: HomePage },
  { path: '*', component: NotReadyPage },
];

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/motorcycles-for-sale" />
          {
            routes.map(route =>
              <Route key={route.path} component={route.component} path={route.path} />,
            )
          }
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
