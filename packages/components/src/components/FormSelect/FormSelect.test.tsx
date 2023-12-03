import { render, screen } from "@testing-library/react";
import React from "react";
import { useForm } from "react-hook-form";
import { userEvent } from "@testing-library/user-event";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "../../primitives/Box";
import type { SelectProps } from "../Select";
import {
  Default as FormSelect,
  Required as RequiredFormSelect,
  Disabled as DisabledFormSelect,
} from "./FormSelect.stories";
import { ControlledFormSelect } from "./ControlledFormSelect";

const selectItems: SelectProps["items"] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "vanilla", label: "Vanilla" },
];

const ReactHookFormExample = (): JSX.Element => {
  const schema = yup.object().shape({
    flavor: yup.string().required("A flavor is required."),
  });

  interface FormInputs {
    flavor: string;
  }

  const { control, formState } = useForm<FormInputs>({
    defaultValues: {
      flavor: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <Box.form>
      <ControlledFormSelect
        control={control}
        data-testid="test"
        helpText={
          formState.errors.flavor
            ? formState.errors.flavor.message
            : "Please select a flavor."
        }
        id="flavor"
        items={selectItems}
        label="Select a flavor"
        name="flavor"
        required
      />
    </Box.form>
  );
};

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
      screen.getByText("Please choose one of the values."),
    ).toBeInTheDocument();
  });

  it("should render a ControlledFormSelect", async () => {
    const user = userEvent.setup();
    render(<ReactHookFormExample />);
    const controlledSelect = screen.getByRole("combobox");

    expect(controlledSelect).toBeInTheDocument();
    expect(screen.getByLabelText("Select a flavor")).toBeInTheDocument();
    expect(screen.getByText("Please select a flavor.")).toBeInTheDocument();
    expect(controlledSelect).toBeRequired();
    expect(controlledSelect).toHaveAttribute("id", "flavor");
    expect(controlledSelect).toHaveAttribute("data-testid", "test");

    await user.click(controlledSelect);
    await user.click(screen.getByRole("option", { name: "Vanilla" }));

    expect(
      screen.getByRole("option", { name: "Vanilla", hidden: true })
    ).toHaveAttribute("aria-selected", "true");
  });
});
