import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";

import "./components/common/assets/scss/material-dashboard-pro-react.scss?v=1.9.0";
import App from "./components/App";
import configureStore from "./redux/configureStore";
const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App/>
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);