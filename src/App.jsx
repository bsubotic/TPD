import React from "react";
import "whatwg-fetch"; // in order for fetch to work in IE
import ie from "ie-version";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { values } from "ramda";

import NotSupportedBrowser from "components/NotSupportedBrowser";
import ErrorBoundary from "components/ErrorBoundary";
import routes from "routes";

import scenes from "./sceneMapping";
import "./App.scss";

const App = () =>
  ie && ie.version && ie.version <= 10 ? (
    <NotSupportedBrowser />
  ) : (
    <Router>
      <ErrorBoundary>
        <Switch>
          {values(routes).map(({ componentName, ...rest }) => (
            <Route {...rest} component={scenes[componentName]} />
          ))}
        </Switch>
      </ErrorBoundary>
    </Router>
  );

export default App;
