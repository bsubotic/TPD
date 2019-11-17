import React from "react";
import { values, juxt, identity, pipe } from "ramda";

import routes from "./routes";
import scenes from "./sceneMapping";

describe("Component mapping", () => {
  test("All components mentioned in routes should be mapped", () => {
    const keyIsComponentPairs = values(routes).map(
      juxt([
        identity,
        pipe(
          ({ componentName }) => scenes[componentName],
          component => component && React.createElement(component),
          React.isValidElement
        )
      ])
    );

    expect(keyIsComponentPairs).toEqual(
      keyIsComponentPairs.map(([k]) => [k, true])
    );
  });
});
