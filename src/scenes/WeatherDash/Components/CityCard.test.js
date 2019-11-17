import React from "react";
import renderer from "react-test-renderer";

import CityCard from "./CityCard";

test("render an enabled submit button", () => {
  const tree = renderer.create(<CityCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
