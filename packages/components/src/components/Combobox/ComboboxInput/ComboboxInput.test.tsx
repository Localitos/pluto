import { render, screen } from "@testing-library/react";
import * as Ariakit from "@ariakit/react";
import React from "react";
import { userEvent, UserEvent } from "@testing-library/user-event";
import { ComboboxInput, ComboboxInputProps } from "./ComboboxInput";

const ComboboxInputMock = (props: Partial<ComboboxInputProps>) => {
  const defaultProps: ComboboxInputProps = {
    onChange: jest.fn(),
    store: Ariakit.useComboboxStore(),
    disabled: false,
    onClick: jest.fn(),
  };

  return <ComboboxInput {...defaultProps} {...props} />;
};

describe("<ComboboxInput />", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("renders a combobox input correctly", () => {
    render(<ComboboxInputMock />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders a combobox input with a placeholder", () => {
    render(<ComboboxInputMock placeholder="Enter a city name" />);

    expect(
      screen.getByPlaceholderText("Enter a city name"),
    ).toBeInTheDocument();
  });

  it("calls onChange when input changes", async () => {
    const onChange = jest.fn();
    render(<ComboboxInputMock onChange={onChange} />);

    const input = screen.getByRole("combobox");

    expect(onChange).not.toHaveBeenCalled();

    await user.type(input, "input value");

    expect(onChange).toHaveBeenCalled();
  });

  it("calls onClick when input is clicked", async () => {
    const onClick = jest.fn();
    render(<ComboboxInputMock onClick={onClick} />);

    const input = screen.getByRole("combobox");

    expect(onClick).not.toHaveBeenCalled();

    await userEvent.click(input);

    expect(onClick).toHaveBeenCalled();
  });

  it("renders a disabled combobox input", () => {
    render(<ComboboxInputMock disabled />);

    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
