import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { ConfirmDialog } from "./ConfirmDialog";

describe("<ConfirmDialog", () => {
  it("renders", async () => {
    const user = userEvent.setup();

    const cancelFn = jest.fn();
    const confirmFn = jest.fn();

    render(
      <ConfirmDialog
        cancelLabel="Cancel"
        confirmLabel="Confirm"
        description="Are you sure you want to do this action?"
        onCancel={cancelFn}
        onConfirm={confirmFn}
        title={"Are you sure?"}
      />
    );

    expect(
      screen.getByRole("heading", { name: "Are you sure?" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Are you sure you want to do this action?")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Confirm" }));
    expect(confirmFn).toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(cancelFn).toHaveBeenCalled();
  });
});
