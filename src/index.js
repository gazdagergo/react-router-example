import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch, HashRouter } from "react-router-dom";

import AboutUs from "./AboutUs";
import HomePageContainer from "./HomePageContainer";

function App({ router: Router }) {
  return (
    <Router>
      <Switch>
        <Route name="aboutus" path="/aboutus" component={AboutUs} />
        <Route name="home" path="/" component={HomePageContainer} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App router={BrowserRouter} />, rootElement);
