import { render, screen, waitFor } from "@testing-library/react";
import { UserEvent, userEvent } from "@testing-library/user-event";
import React from "react";
import { Default } from "./Modal.stories";

const OPEN_MODAL_TEXT = "Open modal";

describe("<Modal />", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should open and close a modal using the close modal button", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_MODAL_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await user.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const renderedCloseButton = screen.getByLabelText("Close modal");
    expect(renderedCloseButton).toBeInTheDocument();

    await user.click(renderedCloseButton);
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("should open and close a modal using the primary button", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_MODAL_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await user.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const renderedPrimaryButton = screen.getByText("Done");
    expect(renderedPrimaryButton).toBeInTheDocument();

    await user.click(renderedPrimaryButton);
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("should open and close a modal using the secondary button", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_MODAL_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await user.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const renderedSecondaryButton = screen.getByText("Back");
    expect(renderedSecondaryButton).toBeInTheDocument();

    await user.click(renderedSecondaryButton);
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
