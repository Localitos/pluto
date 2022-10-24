import { render, screen } from "@testing-library/react";
import React from "react";
import { Badge } from "./Badge";

describe("<Badge />", () => {
  it("should render the content", () => {
    render(<Badge>Example Text</Badge>);

    expect(screen.getByText("Example Text")).toBeInTheDocument();
  });

  it("should allow for global html Attributes", () => {
    render(
      <Badge aria-label="foo" data-testid="bar">
        Message here
      </Badge>
    );

    expect(screen.getByTestId("bar")).toBeInTheDocument();
    expect(screen.getByLabelText("foo")).toBeInTheDocument();
  });
});
