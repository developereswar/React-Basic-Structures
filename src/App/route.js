import React, { useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';


import { PrivateRoute } from '../_component/PrivateRoute'
// Pages
import {Layout} from '../_layout/Layout';
import LoginComponent from '../pages/Login';

export const AppRoute = (props) => {
  return (
    <Router>
      <PrivateRoute path='/' component={Layout} exact />
      <Route path="/login" exact component={LoginComponent} />
      <Redirect from="*" to="/" />
    </Router>
  );
};