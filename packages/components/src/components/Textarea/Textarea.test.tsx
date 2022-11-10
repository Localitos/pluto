import { render, screen } from "@testing-library/react";
import React from "react";
import { TextArea } from "./Textarea";

describe("<Textarea />", () => {
  const initialProps = {
    id: "textarea",
    name: "cool",
    required: true,
    disabled: true,
    readOnly: true,
    hasError: true,
    placeholder: "Enter your name",
  };

  render(<TextArea {...initialProps} />);

  const TextAreaElement = screen.getByRole("textbox");

  it("renders correctly", () => {
    expect(TextAreaElement).toBeInTheDocument();
  });

  it("should render a required textarea", () => {
    expect(TextAreaElement).toHaveAttribute("required", "");
  });

  it("should render a disabled textarea", () => {
    expect(TextAreaElement).toHaveAttribute("disabled", "");
  });

  it("should render a readonly textarea", () => {
    expect(TextAreaElement).toHaveAttribute("aria-readonly", "true");
    expect(TextAreaElement).toHaveAttribute("readonly", "");
  });

  it("should render a textarea id", () => {
    expect(TextAreaElement).toHaveAttribute("id", "textarea");
  });

  it("should render a textarea name", () => {
    expect(TextAreaElement).toHaveAttribute("name", "cool");
  });

  it("should render a textarea placeholder", () => {
    expect(TextAreaElement).toHaveAttribute("placeholder", "Enter your name");
  });
});
