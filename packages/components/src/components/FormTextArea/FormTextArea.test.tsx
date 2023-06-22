import { act, render, screen } from "@testing-library/react";
import React from "react";
import { useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "../../primitives/Box";
import {
  Default as FormTextArea,
  Required as RequiredFormTextArea,
  Disabled as DisabledFormTextArea,
} from "./FormTextArea.stories";
import { ControlledFormTextArea } from "./ControlledFormTextArea";

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
      <ControlledFormTextArea
        control={control}
        data-testid="test"
        helpText={
          formState.errors.flavor
            ? formState.errors.flavor.message
            : "Please enter a flavor."
        }
        id="flavor"
        label="Enter a flavor"
        name="flavor"
        placeholder="Maybe something crazy?"
        required
      />
    </Box.form>
  );
};

describe("<FormTextArea />", () => {
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

  it("should render a ControlledFormTextArea", async () => {
    render(<ReactHookFormExample />);
    const user = userEvent.setup();
    const controlledInput = screen.getByRole("textbox");

    expect(controlledInput).toBeInTheDocument();
    expect(screen.getByLabelText("Enter a flavor")).toBeInTheDocument();
    expect(screen.getByText("Please enter a flavor.")).toBeInTheDocument();
    expect(controlledInput).toBeRequired();
    expect(controlledInput).toHaveAttribute(
      "placeholder",
      "Maybe something crazy?"
    );
    expect(controlledInput).toHaveAttribute("name", "flavor");
    expect(controlledInput).toHaveAttribute("id", "flavor");
    expect(controlledInput).toHaveAttribute("data-testid", "test");

    await act(() => user.tab());

    await act(() => user.keyboard("Chocolate"));

    expect(controlledInput).toHaveValue("Chocolate");
  });
});
