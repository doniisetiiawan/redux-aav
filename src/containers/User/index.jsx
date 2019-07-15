import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import All from './All';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AddUser from './Add';

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

const User = () => (
  <AppWrapper>
    <Header />
    <Switch>
      <Route exact path="/" component={All} />
      <Route exact path="/users/add" component={AddUser} />
    </Switch>
    <Footer />
  </AppWrapper>
);

export default User;
