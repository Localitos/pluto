import { render, screen } from "@testing-library/react";
import React from "react";
import { ProgressBar } from "./ProgressBar";

describe("<ProgressBar />", () => {
  it("renders the default variant correctly", () => {
    render(<ProgressBar value={50} />);

    const renderedProgressBar = screen.getByRole("progressbar");
    expect(renderedProgressBar).toHaveAttribute("data-value", "50");
    expect(renderedProgressBar).toHaveAttribute("radius", "borderRadius10");
    expect(renderedProgressBar).toHaveAttribute("h", "space25");
  });

  it("renders the large variant correctly", () => {
    render(<ProgressBar size="large" value={75} />);

    const renderedProgressBar = screen.getByRole("progressbar");
    expect(renderedProgressBar).toHaveAttribute("h", "space40");
    expect(renderedProgressBar).toHaveAttribute("radius", "borderRadius50");
  });

  it("renders background color correctly", () => {
    render(
      <ProgressBar backgroundcolor="colorAvatarBackgroundPink" value={25} />
    );

    const renderedProgressBar = screen.getByRole("progressbar");
    expect(renderedProgressBar).toHaveAttribute(
      "backgroundColor",
      "colorAvatarBackgroundPink"
    );
  });

  it("should allow for global html Attributes", () => {
    render(<ProgressBar aria-label="foo" data-testid="bar" value={100} />);

    expect(screen.getByTestId("bar")).toBeInTheDocument();
    expect(screen.getByLabelText("foo")).toBeInTheDocument();
  });
});
