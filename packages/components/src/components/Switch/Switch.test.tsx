import { render } from "@testing-library/react";
import React from "react";
import { Switch } from "./Switch";

describe("<Switch />", () => {
  it("renders correctly", () => {
    render(<Switch>Test</Switch>);
  });
});
