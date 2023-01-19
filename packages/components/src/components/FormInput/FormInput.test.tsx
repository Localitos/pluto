import { render, screen } from "@testing-library/react";
import React from "react";
import {
  Default as FormInput,
  Required as RequiredFormInput,
  Disabled as DisabledFormInput,
} from "./FormInput.stories";

describe("<FormInput />", () => {
  it("renders correctly", () => {
    render(<FormInput />);

    expect(screen.getByLabelText("Label text")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render a required input", () => {
    render(<RequiredFormInput />);
    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("should render a disabled input", () => {
    render(<DisabledFormInput />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should render help text with the", () => {
    render(<RequiredFormInput />);
    expect(screen.getByText("Please enter some text.")).toBeInTheDocument();
  });
});
