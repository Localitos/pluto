import { render, screen } from "@testing-library/react";
import React from "react";
import { Root, IndeterminateIndicator, CheckIndicator } from "./Checkbox";

describe("Checkbox", () => {
  describe("Render", () => {
    it("should render a checkbox", () => {
      render(<Root>Checkbox</Root>);
      const renderedCheckbox = screen.getByTestId("checkbox");
      expect(renderedCheckbox).toHaveAttribute("data-state");
    });

    it("should render wrapped", async () => {
      render(<Root wrapped={true}>Wrapped checkbox</Root>);
      expect(await screen.findByTestId("checkbox-container")).toHaveStyle(
        "padding: 0.75rem"
      );
    });

    it("should render with error", async () => {
      render(<Root error={true}>Checkbox with error</Root>);
      expect(await screen.findByTestId("checkbox-label")).toHaveStyle(
        "color: #B91C1C"
      );
    });

    it("should render with check indicator", () => {
      render(
        <Root CheckboxIcon={CheckIndicator} checked>
          Checkbox with check
        </Root>
      );
    });

    it("should render with indeterminate indicator", () => {
      render(
        <Root CheckboxIcon={IndeterminateIndicator} checked>
          Indeterminate checkbox
        </Root>
      );
    });
  });
});
