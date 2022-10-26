import { render, screen } from "@testing-library/react";
import React from "react";
import { InputBox } from "./InputBox";
import type { InputBoxTypes } from "./InputBox";

describe("<InputBox />", () => {
  const initialProps = {
    disabled: true,
    readOnly: true,
    hasError: true,
    type: "hidden" as InputBoxTypes,
    "data-testid": "input-box",
  };

  render(<InputBox {...initialProps}>Input Box</InputBox>);

  const InputBoxElement = screen.getByTestId("input-box");

  it("renders correctly", () => {
    expect(InputBoxElement).toBeInTheDocument();
  });

  it("should render a disabled input box", () => {
    expect(InputBoxElement.dataset.disabled).toBe("true");
  });

  it("should render a disabled input box with an error", () => {
    expect(InputBoxElement.dataset.hasError).toBe("true");
  });

  it("should render a readonly input box", () => {
    expect(InputBoxElement.dataset.readOnly).toBe("true");
  });

  it("should render a hidden input box", () => {
    expect(InputBoxElement.dataset.hidden).toBe("true");
  });
});
