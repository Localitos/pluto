import * as React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

describe("Radio", () => {
  it("should render a radio group", () => {
    render(
      <RadioGroup label="View density">
        <Radio id="default" label="Default" value="default" />
      </RadioGroup>
    );
    const renderedRadioGroup = screen.getByRole("radiogroup");
    const renderedRadio = screen.getByRole("radio");
    expect(renderedRadioGroup).toBeInTheDocument();
    expect(renderedRadio).toBeInTheDocument();
  });

  it("should render a radio group with an accessible label", () => {
    render(
      <RadioGroup label="View density">
        <Radio id="default" label="Default" value="default" />
      </RadioGroup>
    );
    const renderedRadioGroup = screen.getByRole("radiogroup");
    expect(renderedRadioGroup).toHaveAttribute("aria-label", "View density");
  });

  it("should render an unchecked radio", () => {
    render(
      <RadioGroup>
        <Radio id="default" label="Default" value="default" />
      </RadioGroup>
    );
    const renderedRadio = screen.getByRole("radio");
    expect(renderedRadio).not.toBeChecked();
    expect(renderedRadio).toHaveAttribute("data-state", "unchecked");
  });

  it("should render a checked radio", async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup defaultValue="default">
        <Radio id="default" label="Default" value="default" />
      </RadioGroup>
    );

    const renderedRadio = await screen.findByRole("radio");

    await act(async () => user.click(renderedRadio));

    expect(renderedRadio).toBeChecked();
    expect(renderedRadio).toHaveAttribute("data-state", "checked");
  });

  it("should render a disabled radio", () => {
    render(
      <RadioGroup label="View density">
        <Radio disabled id="default" label="Default" value="default" />
      </RadioGroup>
    );
    const renderedRadio = screen.getByRole("radio");
    expect(renderedRadio).toBeDisabled();
  });

  it("should render an id", () => {
    render(
      <RadioGroup label="View density">
        <Radio id="default" label="Default" value="default" />
      </RadioGroup>
    );
    const renderedRadio = screen.getByRole("radio");
    expect(renderedRadio).toHaveAttribute("id", "default");
  });

  it("should render a value", () => {
    render(
      <RadioGroup label="View density">
        <Radio id="default" label="Default" value="default" />
      </RadioGroup>
    );
    const renderedRadio = screen.getByRole("radio");
    expect(renderedRadio).toHaveValue("default");
  });
});
