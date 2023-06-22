import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Default } from "./AlertDialog.stories";

const OPEN_ALERT_DIALOG_TEXT = "Open alert dialog";

describe("<AlertDialog />", () => {
  it("renders correctly", async () => {
    const user = userEvent.setup();
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_ALERT_DIALOG_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await act(() => user.click(renderedOpenButton));
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();

    await act(() => user.keyboard("{Escape}"));
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();

    const renderedCloseButton = screen.getByRole("button", { name: "Cancel" });
    expect(renderedCloseButton).toBeInTheDocument();

    await act(() => user.click(renderedCloseButton));
    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  });
});
