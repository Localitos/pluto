import { render, screen } from "@testing-library/react";
import React from "react";
import {
  Default as FormTextArea,
  Required as RequiredFormTextArea,
  Disabled as DisabledFormTextArea,
} from "./FormTextArea.stories";

describe("<FormInput />", () => {
  it("renders correctly", () => {
    render(<FormTextArea />);

    expect(screen.getByLabelText("Label text")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render a required input", () => {
    render(<RequiredFormTextArea />);
    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("should render a disabled input", () => {
    render(<DisabledFormTextArea />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should render help text with the", () => {
    render(<RequiredFormTextArea />);
    expect(screen.getByText("Please enter some text.")).toBeInTheDocument();
  });
});
