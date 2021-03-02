import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";

import "./components/common/assets/scss/material-dashboard-pro-react.scss?v=1.9.0";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import Match from "./components/match/Match"
const store = configureStore();

/*<Router>
      <App/>
    </Router>*/

render(
  <ReduxProvider store={store}>
    <Router>
      <Match/>
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);