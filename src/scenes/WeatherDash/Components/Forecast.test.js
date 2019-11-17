import React from "react";
import renderer from "react-test-renderer";

import Forecast from "./Forecast";

test("render an enabled submit button", () => {
  const tree = renderer.create(<Forecast />).toJSON();
  expect(tree).toMatchSnapshot();
});
