import { render, screen } from "@testing-library/react";
import React from "react";
import { Callout } from "./Callout";

describe("<Callout />", () => {
  it("should render the content", () => {
    render(<Callout>Message here</Callout>);

    expect(screen.getByText("Message here")).toBeInTheDocument();
  });

  it("should render the icon", () => {
    render(<Callout>Message here</Callout>);

    expect(screen.getByTestId("callout-icon")).toBeInTheDocument();
  });

  it("should allow for global html Attributes", () => {
    render(
      <Callout aria-label="foo" data-testid="bar">
        Message here
      </Callout>
    );

    expect(screen.getByTestId("bar")).toBeInTheDocument();
    expect(screen.getByLabelText("foo")).toBeInTheDocument();
  });
});
