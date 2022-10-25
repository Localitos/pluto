import { render, screen } from "@testing-library/react";
import React from "react";
import { Root, IndeterminateIndicator, CheckIndicator } from "./Checkbox";

describe("Checkbox", () => {
  describe("Render", () => {
    it("should render a checkbox", () => {
      render(<Root>Checkbox</Root>);
      const renderedCheckbox = screen.getByRole("button");
      expect(renderedCheckbox).toBeInTheDocument();
    });

    it("should render wrapped", () => {
      render(<Root wrapped={true}>Wrapped checkbox</Root>);
      const renderedButton = screen.getByText("Wrapped checkbox");
      expect(renderedButton).toBeInTheDocument();
    });

    it("should render with error", () => {
      render(<Root error={true}>Checkbox with error</Root>);
      const renderedButton = screen.getByRole("button");
      expect(renderedButton).toBeDisabled();
    });

    it("should render with check indicator", () => {
      render(
        <Root Icon={CheckIndicator} checked>
          Checkbox with check
        </Root>
      );
      const renderedButton = screen.getByRole("button");
      expect(renderedButton.getAttribute("aria-busy")).toBeTruthy();
    });

    it("should render with indeterminate indicator", () => {
      render(
        <Root Icon={IndeterminateIndicator} checked>
          Indeterminate checkbox
        </Root>
      );
      const renderedButton = screen.getByRole("button");
      expect(renderedButton.getAttribute("aria-busy")).toBeTruthy();
    });
  });
});
