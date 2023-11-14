import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { useModalState } from "../Modal/index";
import { ConfirmationModal } from "./ConfirmationModal";

const OPEN_MODAL_TEXT = "Open modal";

const onConfirm = jest.fn();

const ExampleModal = () => {
  const state = useModalState();

  return (
    <div>
      <button onClick={state.show}>{OPEN_MODAL_TEXT}</button>

      <ConfirmationModal onConfirm={onConfirm} state={state}>
        Do you want to confirm?
      </ConfirmationModal>
    </div>
  );
};

const CustomModal = () => {
  const state = useModalState();

  return (
    <div>
      <button onClick={state.show}>{OPEN_MODAL_TEXT}</button>

      <ConfirmationModal
        confirmLabel="Delete"
        destructive
        onConfirm={onConfirm}
        state={state}
      >
        Do you want to delete?
      </ConfirmationModal>
    </div>
  );
};

describe("<ConfirmationModal />", () => {
  it("renders default attributes", async () => {
    render(<ExampleModal />);

    const openButton = screen.getByText(OPEN_MODAL_TEXT);
    expect(openButton).toBeInTheDocument();

    await userEvent.click(openButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    expect(screen.getByText("Do you want to confirm?")).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    expect(cancelButton).toBeInTheDocument();
    await userEvent.click(cancelButton);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await userEvent.click(openButton);

    const confirmButton = screen.getByRole("button", { name: "Confirm" });
    await userEvent.click(confirmButton);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(onConfirm).toHaveBeenCalled();
  });

  it("renders a custom button label", async () => {
    render(<CustomModal />);

    const openButton = screen.getByText(OPEN_MODAL_TEXT);
    expect(openButton).toBeInTheDocument();

    await userEvent.click(openButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    expect(screen.getByText("Do you want to delete?")).toBeInTheDocument();

    const confirmButton = screen.getByRole("button", { name: "Delete" });
    await userEvent.click(confirmButton);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(onConfirm).toHaveBeenCalled();
  });
});
