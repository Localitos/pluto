import { render, screen } from "@testing-library/react";
import React from "react";
import { useComboboxStore } from "@ariakit/react";
import { ComboboxPopover } from "../ComboboxPopover/ComboboxPopover";
import { ComboboxItem } from "./ComboboxItem";

const ComboboxItemMock = () => {
  const combobox = useComboboxStore({
    open: true,
  });

  return (
    <ComboboxPopover store={combobox}>
      <ComboboxItem store={combobox}>Children content</ComboboxItem>
    </ComboboxPopover>
  );
};

describe("<ComboboxItem />", () => {
  it("renders children when provided", async () => {
    render(<ComboboxItemMock />);

    expect(await screen.findByText("Children content")).toBeInTheDocument();
  });
});
