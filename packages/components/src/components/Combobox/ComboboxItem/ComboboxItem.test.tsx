import { render, screen } from "@testing-library/react";
import React from "react";
import * as Ariakit from "@ariakit/react";
import { ComboboxPopover } from "../ComboboxPopover/ComboboxPopover";
import { ComboboxItem } from "./ComboboxItem";

const ComboboxItemMock = () => (
  <ComboboxPopover store={Ariakit.useComboboxStore()}>
    <ComboboxItem>
      <div>Children content</div>
    </ComboboxItem>
  </ComboboxPopover>
);

describe("<ComboboxItem />", () => {
  it("renders children when provided", () => {
    render(<ComboboxItemMock />);

    expect(screen.getByText("Children content")).toBeInTheDocument();
  });
});
