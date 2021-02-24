import React from "react";
import "../styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from 'react-redux';
import { store } from '../Store';
// Layout for App
import { AppRoute } from './route';

export const App = () => {
  return (
    <Provider store={store}>
      <AppRoute></AppRoute>
    </Provider>
  );
}
