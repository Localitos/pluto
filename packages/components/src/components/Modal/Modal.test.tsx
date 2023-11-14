import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { Default } from "./Modal.stories";

const OPEN_MODAL_TEXT = "Open modal";

describe("<Modal />", () => {
  it("should open and close a modal using the close modal button", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_MODAL_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await userEvent.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const renderedCloseButton = screen.getByLabelText("Close modal");
    expect(renderedCloseButton).toBeInTheDocument();

    await userEvent.click(renderedCloseButton);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should open and close a modal using the primary button", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_MODAL_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await userEvent.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const renderedPrimaryButton = screen.getByText("Done");
    expect(renderedPrimaryButton).toBeInTheDocument();

    await userEvent.click(renderedPrimaryButton);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should open and close a modal using the secondary button", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_MODAL_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await userEvent.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const renderedSecondaryButton = screen.getByText("Back");
    expect(renderedSecondaryButton).toBeInTheDocument();

    await userEvent.click(renderedSecondaryButton);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should open a modal and close it using the escape key", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_MODAL_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await userEvent.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should open a modal and close it by clicking on the backdrop", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_MODAL_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await userEvent.click(renderedOpenButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const renderedBackdrop = screen.getByRole("presentation");
    expect(renderedBackdrop).toBeInTheDocument();

    await userEvent.click(renderedBackdrop);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
