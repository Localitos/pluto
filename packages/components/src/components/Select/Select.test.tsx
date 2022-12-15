import { render, screen } from "@testing-library/react";
import React from "react";
import { Select } from "./Select";

describe("<Select />", () => {
  const initialProps = {
    id: "select",
    required: true,
    disabled: true,
    hasError: true,
    items: [
      { label: "item-one", value: "Item One" },
      { label: "item-two", value: "Item Two" },
    ],
  };

  render(<Select {...initialProps} />);

  const SelectElement = screen.getByRole("combobox");

  it("renders correctly", () => {
    expect(SelectElement).toBeInTheDocument();
  });

  it("should render a required select", () => {
    expect(SelectElement).toHaveAttribute("aria-required", "true");
  });

  it("should render a disabled select", () => {
    expect(SelectElement).toHaveAttribute("disabled", "");
  });

  it("should render a select id", () => {
    expect(SelectElement).toHaveAttribute("id", "select");
  });
});
