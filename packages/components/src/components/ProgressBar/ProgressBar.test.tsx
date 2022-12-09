import { render, screen } from "@testing-library/react";
import React from "react";
import { ProgressBar } from "./ProgressBar";

describe("<ProgressBar />", () => {
  it("renders the default variant correctly", () => {
    render(<ProgressBar value={50} />);

    const renderedProgressBar = screen.getByRole("progressbar");

    expect(renderedProgressBar).toBeInTheDocument();
    expect(renderedProgressBar).toHaveAttribute("data-value", "50");
  });

  it("renders background color, border radius and height correctly", () => {
    render(
      <ProgressBar
        backgroundColor="colorAvatarBackgroundPink"
        borderRadius="borderRadiusPill"
        h="space50"
        value={25}
      />
    );

    const renderedProgressBar = screen.getByRole("progressbar");
    expect(renderedProgressBar).toHaveAttribute(
      "background",
      "colorAvatarBackgroundPink"
    );
    expect(renderedProgressBar).toHaveAttribute("h", "space50");
    expect(renderedProgressBar).toHaveAttribute("radius", "borderRadiusPill");
  });

  it("should allow for global html Attributes", () => {
    render(<ProgressBar aria-label="foo" data-testid="bar" value={100} />);

    expect(screen.getByTestId("bar")).toBeInTheDocument();
    expect(screen.getByLabelText("foo")).toBeInTheDocument();
  });
});
