import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";
import { Confirm } from "./Confirm";

const CONFIRM_TITLE = "Are you sure?";

describe("Confirm", () => {
  const renderConfirmWithButton = ({
    successFn = jest.fn(),
    cancelFn = jest.fn(),
  }: {
    successFn?: jest.Mock;
    cancelFn?: jest.Mock;
  }) => {
    render(
      <Button
        onClick={async () => {
          try {
            await Confirm({
              title: CONFIRM_TITLE,
              description: `If you leave this card without hitting "Save Changes," all of your changes will be lost.`,
              confirmLabel: "Confirm",
              cancelLabel: "Cancel",
            });

            successFn();
          } catch {
            cancelFn();
          }
        }}
        variant="primary"
      >
        Test
      </Button>
    );
  };

  it("handles user clicking confirm", async () => {
    const user = userEvent.setup();
    const successMock = jest.fn();

    renderConfirmWithButton({ successFn: successMock });

    await user.click(screen.getByRole("button", { name: "Test" }));

    expect(
      screen.getByRole("heading", { name: CONFIRM_TITLE })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/If you leave this card without hitting/)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Confirm" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(successMock).toHaveBeenCalled();
  });

  it("handles user clicking cancel", async () => {
    const user = userEvent.setup();
    const cancelMock = jest.fn();
    renderConfirmWithButton({ cancelFn: cancelMock });

    await user.click(screen.getByRole("button", { name: "Test" }));

    expect(
      screen.getByRole("heading", { name: CONFIRM_TITLE })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/If you leave this card without hitting/)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Cancel" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(cancelMock).toHaveBeenCalled();
  });
});
