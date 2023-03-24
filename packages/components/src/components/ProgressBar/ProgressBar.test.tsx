import { render, screen } from "@testing-library/react";
import React from "react";
import { ProgressBar } from "./ProgressBar";

describe("<ProgressBar />", () => {
  it("renders the default variant correctly", () => {
    render(<ProgressBar value={50} />);

    const renderedProgressBar = screen.getByRole("progressbar");
    expect(renderedProgressBar).toHaveAttribute("data-value", "50");
  });

  it("should allow for global html Attributes", () => {
    render(<ProgressBar aria-label="foo" data-testid="bar" value={100} />);

    expect(screen.getByTestId("bar")).toBeInTheDocument();
    expect(screen.getByLabelText("foo")).toBeInTheDocument();
  });
});
