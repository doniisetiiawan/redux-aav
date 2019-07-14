import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import NotFoundPage from '../NotFoundPage';
import ContactPage from '../ContactPage';
import AboutPage from '../AboutPage';
import HomePage from '../HomePage';
import Login from '../Login';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  .btn {
    line-height: 0;
  }
`;

const App = () => (
  <AppWrapper>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </AppWrapper>
);

export default withRouter(App);
