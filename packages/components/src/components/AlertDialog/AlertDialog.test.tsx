import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Default } from "./AlertDialog.stories";

const OPEN_ALERT_DIALOG_TEXT = "Open alert dialog";

describe("<AlertDialog />", () => {
  it("renders correctly", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_ALERT_DIALOG_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await userEvent.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    /* expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument(); */

    const renderedCloseButton = screen.getByRole("button", { name: "Cancel" });
    expect(renderedCloseButton).toBeInTheDocument();

    await userEvent.click(renderedCloseButton);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
