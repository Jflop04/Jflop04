import React, { Fragment } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from './shared/components/navbar/NavbarComponent';
import HomePage from './home/HomePage';
import ForbidenComponent from './shared/components/forbiden/ForbidenComponent';
function App() {
  
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/forbiden" exact>
          <ForbidenComponent />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
