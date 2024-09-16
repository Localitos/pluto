import React from "react";
import { render, screen } from "@testing-library/react";
import { useComboboxStore } from "@ariakit/react";
import { ComboboxPopover } from "./ComboboxPopover";

const ComboboxPopoverMock = () => {
  const combobox = useComboboxStore({
    open: true,
  });

  return (
    <ComboboxPopover store={combobox}>
      <div>Children content</div>
    </ComboboxPopover>
  );
};

describe("<ComboboxPopover />", () => {
  it("renders popover with children", async () => {
    render(<ComboboxPopoverMock />);

    expect(await screen.findByText("Children content")).toBeInTheDocument();
  });
});
