import { render, screen } from "@testing-library/react";
import React from "react";
import { Default as StepIndicator } from "./StepIndicator.stories";
import { StepIndicatorSegment } from "./StepIndicatorSegment";

describe("<StepIndicator />", () => {
  it("renders correctly", () => {
    render(<StepIndicator />);
    expect(screen.getByLabelText("progress")).toBeInTheDocument();
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(screen.getByText("Step 3")).toBeInTheDocument();
  });
});

describe("<StepIndicatorSegment />", () => {
  it("renders as the current segment", () => {
    render(
      <StepIndicatorSegment current={1} index={0}>
        Step 1
      </StepIndicatorSegment>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText("Step 1").closest("li")).toHaveAttribute(
      "aria-current",
      "true"
    );
  });

  it("renders as not the current segment", () => {
    render(
      <StepIndicatorSegment current={2} index={0}>
        Step 1
      </StepIndicatorSegment>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText("Step 1").closest("li")).toHaveAttribute(
      "aria-current",
      "false"
    );
  });
});
