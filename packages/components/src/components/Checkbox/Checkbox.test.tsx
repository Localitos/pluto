import { render, screen } from "@testing-library/react";
import React from "react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  describe("Render", () => {
    it("should render a checkbox", () => {
      render(<Checkbox id="checkbox">Checkbox</Checkbox>);
      const renderedCheckbox = screen.getByRole("checkbox");
      // eslint-disable-next-line sonarjs/no-duplicate-string
      expect(renderedCheckbox).toHaveAttribute("data-state", "unchecked");
    });

    it("should render a disabled checkbox", () => {
      render(
        <Checkbox disabled id="checkbox-disabled">
          Checkbox
        </Checkbox>
      );
      const renderedCheckbox = screen.getByRole("checkbox");
      expect(renderedCheckbox).toHaveAttribute("data-disabled");
    });

    it("should render with check indicator", () => {
      render(
        <Checkbox checked id="checkbox-check">
          Checkbox with check
        </Checkbox>
      );
      const renderedCheckbox = screen.getByRole("checkbox");
      expect(renderedCheckbox).toHaveAttribute("data-state", "checked");
    });

    it("should render with indeterminate indicator", () => {
      render(
        <Checkbox checked="indeterminate" id="checkbox-indeterminate">
          Indeterminate checkbox
        </Checkbox>
      );
      const renderedCheckbox = screen.getByRole("checkbox");
      expect(renderedCheckbox).toHaveAttribute("data-state", "indeterminate");
    });
  });
});
