import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import { Switch } from 'react-router-dom';
import { Login } from './components/auth/login/Login';
import { NonAuthenticatedRoute } from './core/guards/NonAuthenticatedRouter';
import { AuthenticatedRoute } from './core/guards/AuthenticatedRoute';
import { Register } from './components/auth/register/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <NonAuthenticatedRoute exact path="/login" component={Login}/>
        <NonAuthenticatedRoute exact path="/register" component={Register}/>
        <AuthenticatedRoute path="/" component={Layout}/>
      </Switch>
    </div>

  );
}

export default App;
