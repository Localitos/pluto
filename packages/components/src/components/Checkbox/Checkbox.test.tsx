import { render, screen } from "@testing-library/react";
import React from "react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  describe("Render", () => {
    it("should render a checkbox", () => {
      render(<Checkbox checkboxId="checkbox">Checkbox</Checkbox>);
      const renderedCheckbox = screen.getByRole("checkbox");
      // eslint-disable-next-line sonarjs/no-duplicate-string
      expect(renderedCheckbox).toHaveAttribute("data-state", "unchecked");
    });

    it("should render a disabled checkbox", () => {
      render(
        <Checkbox checkboxId="checkbox-disabled" disabled>
          Checkbox
        </Checkbox>
      );
      const renderedCheckbox = screen.getByRole("checkbox");
      expect(renderedCheckbox).toHaveAttribute("data-disabled");
    });

    it("should render with check indicator", () => {
      render(
        <Checkbox checkboxId="checkbox-check" checked>
          Checkbox with check
        </Checkbox>
      );
      const renderedCheckbox = screen.getByRole("checkbox");
      const renderedCheckboxIndicator = screen.getByTestId("checkbox-check");
      expect(renderedCheckboxIndicator).toBeInTheDocument();
      expect(renderedCheckbox).toHaveAttribute("data-state", "checked");
    });

    it("should render with indeterminate indicator", () => {
      render(
        <Checkbox checkboxId="checkbox-indeterminate" checked="indeterminate">
          Indeterminate checkbox
        </Checkbox>
      );
      const renderedCheckbox = screen.getByRole("checkbox");
      const renderedCheckboxIndicator = screen.getByTestId(
        "checkbox-indeterminate"
      );
      expect(renderedCheckboxIndicator).toBeInTheDocument();
      expect(renderedCheckbox).toHaveAttribute("data-state", "indeterminate");
    });
  });
});
