import { render, screen } from "@testing-library/react";
import React from "react";
import type { InputTypes } from "./Input";
import { Input } from "./Input";

describe("<Input />", () => {
  const initialProps = {
    id: "input",
    name: "cool",
    type: "password" as InputTypes,
    value: "value",
    required: true,
    disabled: true,
    readOnly: true,
    hasError: true,
    placeholder: "Enter your name",
  };

  render(<Input {...initialProps} />);

  const InputElement = screen.getByPlaceholderText(initialProps.placeholder);

  it("renders correctly", () => {
    expect(InputElement).toBeInTheDocument();
  });

  it("should render a required input", () => {
    expect(InputElement).toHaveAttribute("required", "");
  });

  it("should render a disabled input", () => {
    expect(InputElement).toHaveAttribute("disabled", "");
  });

  it("should render a readonly input", () => {
    expect(InputElement).toHaveAttribute("aria-readonly", "true");
    expect(InputElement).toHaveAttribute("readonly", "");
  });

  it("should render an input value", () => {
    expect(InputElement).toHaveValue("value");
  });

  it("should render an input id", () => {
    expect(InputElement).toHaveAttribute("id", "input");
  });

  it("should render an input name", () => {
    expect(InputElement).toHaveAttribute("name", "cool");
  });

  it("should render an input type", () => {
    expect(InputElement).toHaveAttribute("type", "password");
  });

  it("should render an input placeholder", () => {
    expect(InputElement).toHaveAttribute("placeholder", "Enter your name");
  });
});
