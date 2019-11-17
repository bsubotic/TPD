import React from "react";
import renderer from "react-test-renderer";

import TodaysWeather from "./TodaysWeather";

test("render an enabled submit button", () => {
  const tree = renderer.create(<TodaysWeather />).toJSON();
  expect(tree).toMatchSnapshot();
});
