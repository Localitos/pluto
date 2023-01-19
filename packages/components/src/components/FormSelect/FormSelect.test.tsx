import { render, screen } from "@testing-library/react";
import React from "react";
import {
  Default as FormSelect,
  Required as RequiredFormSelect,
  Disabled as DisabledFormSelect,
} from "./FormSelect.stories";

describe("<FormSelect />", () => {
  it("renders correctly", () => {
    render(<FormSelect />);

    expect(screen.getByLabelText("Label text")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should render a required input", () => {
    render(<RequiredFormSelect />);
    expect(screen.getByRole("combobox")).toBeRequired();
  });

  it("should render a disabled input", () => {
    render(<DisabledFormSelect />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("should render help text with the", () => {
    render(<RequiredFormSelect />);
    expect(
      screen.getByText("Please choose one of the values.")
    ).toBeInTheDocument();
  });
});
