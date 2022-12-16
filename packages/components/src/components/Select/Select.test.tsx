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
      { value: "item-one", label: "Item One" },
      { value: "item-two", label: "Item Two" },
    ],
    value: "",
  };

  it("renders correctly", () => {
    render(<Select {...initialProps} />);
    const SelectElement = screen.getByRole("combobox");
    expect(SelectElement).toBeInTheDocument();
    expect(screen.getByText("Select one")).toBeInTheDocument();
  });

  it("should render a selection", () => {
    render(<Select {...initialProps} value={initialProps.items[0].value} />);
    const SelectElement = screen.getByRole("combobox");
    expect(SelectElement).toBeInTheDocument();
    expect(screen.getAllByText("Item One")[0]).toBeInTheDocument();
  });

  it("should render a multiselection", () => {
    render(
      <Select
        {...initialProps}
        value={[initialProps.items[0].value, initialProps.items[1].value]}
      />
    );
    const SelectElement = screen.getByRole("combobox");
    expect(SelectElement).toBeInTheDocument();
    expect(screen.getByText("Item One, Item Two")).toBeInTheDocument();
  });

  it("should render a required select", () => {
    render(<Select {...initialProps} />);
    const SelectElement = screen.getByRole("combobox");
    expect(SelectElement).toBeRequired();
  });

  it("should render a disabled select", () => {
    render(<Select {...initialProps} />);
    const SelectElement = screen.getByRole("combobox");
    expect(SelectElement).toBeDisabled();
  });

  it("should render a select id", () => {
    render(<Select {...initialProps} />);
    const SelectElement = screen.getByRole("combobox");
    expect(SelectElement).toHaveAttribute("id", "select");
  });
});
