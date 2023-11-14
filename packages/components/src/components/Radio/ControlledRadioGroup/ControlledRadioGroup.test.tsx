import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import React from "react";
import { userEvent } from "@testing-library/user-event";
import { Radio } from "../Radio";
import { ControlledRadioGroup } from "./ControlledRadioGroup";

const Controlled = ({
  onSubmit,
}: {
  onSubmit: (data: { station: string }) => void;
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      station: "one",
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <ControlledRadioGroup
        control={control}
        id="radio-group-controlled"
        name="station"
      >
        <Radio label="Station 1" value="one" />
        <Radio label="Station 2" value="two" />
        <Radio label="Station 3" value="three" />
      </ControlledRadioGroup>

      <button type="submit">Submit</button>
    </form>
  );
};

describe("<ControlledRadioGroup />", () => {
  it("should work properly using controlled state", async () => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    const user = userEvent.setup();

    const onSubmit = jest.fn();

    render(<Controlled onSubmit={onSubmit} />);

    const radios = await screen.findAllByRole("radio");

    expect(radios[0]).toHaveAttribute("data-state", "checked");

    await user.click(screen.getByText("Station 2"));
    expect(radios[1]).toHaveAttribute("data-state", "checked");

    await user.click(screen.getByText("Submit"));

    expect(onSubmit).toHaveBeenCalledWith({ station: "two" });
  });
});
