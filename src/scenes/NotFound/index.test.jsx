import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import NotFound from "./index";

test("render an enabled submit button", () => {
  const tree = renderer
    .create(
      <Router>
        <NotFound />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
