import { render } from "@testing-library/react";
import React from "react";
import { Paragraph } from "./Paragraph";

describe("<Paragraph />", () => {
  it("renders correctly", () => {
    render(<Paragraph />);
  });
});
