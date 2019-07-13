import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage';
import ContactPage from '../ContactPage';
import AboutPage from '../AboutPage';
import HomePage from '../HomePage';
import Login from '../Login';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/contact" component={ContactPage} />
    <Route exact path="/login" component={Login} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default withRouter(App);
