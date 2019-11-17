import React from "react";
import renderer from "react-test-renderer";

import WeatherDash from "./index";

test("render an enabled submit button", () => {
  const tree = renderer.create(<WeatherDash />).toJSON();
  expect(tree).toMatchSnapshot();
});
