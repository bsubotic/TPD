// Polyfills is required for IE 11, @babel/polyfill got deprecated
import "core-js/stable";
import React from "react";
import ReactDOM from "react-dom";

import { loadI18n } from "i18n";
import runningInDevMode from "utils/runningInDevMode";

import "./index.scss";
import App from "./App";

const rootElement = document.getElementById("root");

const render = RootComponent => ReactDOM.render(<RootComponent />, rootElement);

loadI18n();
render(App);

if (runningInDevMode && module.hot) {
  const configureHotModuleReplacement = () => {
    const rerenderApp = () => {
      const NextApp = require("App").default;
      render(NextApp);
    };

    module.hot.accept("App", () => {
      console.log("Hot-replacing App component...");
      rerenderApp();
    });

    module.hot.accept("i18n", () => {
      console.log("Hot-replacing translations...");
      loadI18n(); //this will default to en language after reload
      ReactDOM.unmountComponentAtNode(rootElement);
      rerenderApp();
    });
  };

  configureHotModuleReplacement();
}
