import React from "react";
import { render, screen } from "@testing-library/react";
import * as Ariakit from "@ariakit/react";
import { ComboboxPopover } from "./ComboboxPopover";

const ComboboxPopoverMock = () => (
  <ComboboxPopover store={Ariakit.useComboboxStore()}>
    <div>Children content</div>
  </ComboboxPopover>
);

describe("<ComboboxPopover />", () => {
  it("renders popover with children", () => {
    render(<ComboboxPopoverMock />);

    expect(screen.getByText("Children content")).toBeInTheDocument();
  });
});
