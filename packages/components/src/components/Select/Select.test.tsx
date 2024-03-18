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

  it("renders correctly", async () => {
    render(<Select {...initialProps} />);

    expect(await screen.findByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Select one")).toBeInTheDocument();
  });

  it("should render a selection", async () => {
    render(<Select {...initialProps} value={initialProps.items[0].value} />);

    expect(await screen.findByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByText("Item One")[0]).toBeInTheDocument();
  });

  it("should render a multiselection", async () => {
    render(
      <Select
        {...initialProps}
        value={[initialProps.items[0].value, initialProps.items[1].value]}
      />,
    );

    expect(await screen.findByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Item One, Item Two")).toBeInTheDocument();
  });

  it("should render a required select", async () => {
    render(<Select {...initialProps} />);

    expect(await screen.findByRole("combobox")).toBeRequired();
  });

  it("should render a disabled select", async () => {
    render(<Select {...initialProps} />);

    expect(await screen.findByRole("combobox")).toBeDisabled();
  });

  it("should render a select id", async () => {
    render(<Select {...initialProps} />);

    expect(await screen.findByRole("combobox")).toHaveAttribute("id", "select");
  });
});
