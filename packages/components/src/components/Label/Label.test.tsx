import { render, screen } from "@testing-library/react";
import React from "react";
import { Label } from "./Label";

const text = "Label";
const requiredText = "Required Label";

describe("<Label />", () => {
  it("renders correctly", () => {
    render(<Label htmlFor="input-id">{text}</Label>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should render a required label", () => {
    render(
      <Label htmlFor="required-input-id" required>
        {requiredText}
      </Label>
    );

    expect(screen.getByText(requiredText)).toBeInTheDocument();
  });
});
