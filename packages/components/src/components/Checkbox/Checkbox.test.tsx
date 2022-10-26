import { render, screen } from "@testing-library/react";
import React from "react";
import { CheckboxRoot } from "./Checkbox";

describe("Checkbox", () => {
  describe("Render", () => {
    it("should render a checkbox", () => {
      render(<CheckboxRoot checkboxId="checkbox">Checkbox</CheckboxRoot>);
      const renderedCheckbox = screen.getByTestId("checkbox");
      // eslint-disable-next-line sonarjs/no-duplicate-string
      expect(renderedCheckbox).toHaveAttribute("data-state", "unchecked");
    });

    it("should render a disabled checkbox", () => {
      render(
        <CheckboxRoot checkboxId="checkbox-disabled" disabled>
          Checkbox
        </CheckboxRoot>
      );
      const renderedCheckbox = screen.getByTestId("checkbox");
      expect(renderedCheckbox).toHaveAttribute("data-disabled");
    });

    it("should render with check indicator", () => {
      render(
        <CheckboxRoot checkboxId="checkbox-check" checked>
          Checkbox with check
        </CheckboxRoot>
      );
      const renderedCheckbox = screen.getByTestId("checkbox");
      const renderedCheckboxIndicator = screen.getByTestId("checkbox-check");
      expect(renderedCheckboxIndicator).toBeInTheDocument();
      expect(renderedCheckbox).toHaveAttribute("data-state", "checked");
    });

    it("should render with indeterminate indicator", () => {
      render(
        <CheckboxRoot
          checkboxId="checkbox-indeterminate"
          checked="indeterminate"
        >
          Indeterminate checkbox
        </CheckboxRoot>
      );
      const renderedCheckbox = screen.getByTestId("checkbox");
      const renderedCheckboxIndicator = screen.getByTestId(
        "checkbox-indeterminate"
      );
      expect(renderedCheckboxIndicator).toBeInTheDocument();
      expect(renderedCheckbox).toHaveAttribute("data-state", "indeterminate");
    });
  });
});
