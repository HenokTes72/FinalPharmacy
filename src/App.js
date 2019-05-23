import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import AdminLogin from 'screens/AdminLogin';
import AdminSignup from 'screens/AdminSignup';
import AdminDashboard from 'screens/AdminDashboard';

const AppWrapper = styled.div`
  background-color: white;
`;

function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path='/' render={
          () => <Redirect to='/dashboard' />
        } />
        <Route path='/admin/login' component={AdminLogin} />
        <Route path='/admin/signup' component={AdminSignup} />
        <Route path='/dashboard' component={AdminDashboard} />
      </Switch>
    </AppWrapper>
  );
}

export default App;
