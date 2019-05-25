import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Login from 'screens/Login';
import AdminDashboard from 'screens/Admin';
import DoctorDashboard from 'screens/Doctor';
import PharmacistDashboard from 'screens/Pharmacist';

const AppWrapper = styled.div`
  background-color: white;
`;

function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path='/' render={
          () => <Redirect to='/login' />
        } />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={AdminDashboard} />
        <Route path='/doctor' component={DoctorDashboard} />
        <Route path='/pharma' component={PharmacistDashboard} />
      </Switch>
    </AppWrapper>
  );
}

export default App;
