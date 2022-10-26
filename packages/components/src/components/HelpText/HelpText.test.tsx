import { render, screen } from "@testing-library/react";
import React from "react";
import { HelpText } from "./HelpText";

describe("<HelpText />", () => {
  it("renders correctly", () => {
    render(<HelpText>This is help text</HelpText>);
    const renderedHelpText = screen.getByText("This is help text");
    expect(renderedHelpText).toBeInTheDocument();
  });
});
