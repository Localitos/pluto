import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import React from "react";
import UserEvent from "@testing-library/user-event";
import { Box, Button } from "../../..";
import { ControlledCheckbox } from "./ControlledCheckbox";

const ReactHookFormExample = ({
  onSubmit,
}: {
  onSubmit: (data: { checkbox: boolean }) => void;
}): JSX.Element => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <ControlledCheckbox
        control={control}
        id="checkbox-controlled"
        name="checkbox"
      >
        Checkbox
      </ControlledCheckbox>

      <Box.div marginTop="space40">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Box.div>
    </form>
  );
};

describe("<ControlledCheckbox />", () => {
  it("should render and work with React Hook Form", async () => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    const user = UserEvent.setup();

    const onSubmit = jest.fn();
    render(<ReactHookFormExample onSubmit={onSubmit} />);

    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(onSubmit).toHaveBeenCalledWith({ checkbox: false });

    await user.click(screen.getByRole("checkbox", { name: "Checkbox" }));
    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(onSubmit).toHaveBeenNthCalledWith(2, { checkbox: true });
  });
});
