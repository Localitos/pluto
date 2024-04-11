import { render, screen, waitFor } from "@testing-library/react";
import { userEvent, UserEvent } from "@testing-library/user-event";
import React from "react";
import { Default } from "./Drawer.stories";

const OPEN_DRAWER_TEXT = "Open drawer";

describe("<Drawer />", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should open and close a drawer using the close drawer button", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_DRAWER_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await user.click(renderedOpenButton);

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    const renderedCloseButton = screen.getByLabelText("Close drawer");
    expect(renderedCloseButton).toBeInTheDocument();

    await user.click(renderedCloseButton);
    await waitFor(() => {
      expect(screen.getByRole("dialog")).not.toBeVisible();
    });
  });

  it("should open a drawer and close it using the escape key", async () => {
    render(<Default />);
    const renderedOpenButton = screen.getByText(OPEN_DRAWER_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await user.click(renderedOpenButton);
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    await user.keyboard("{Escape}");
    await waitFor(() => {
      expect(screen.getByRole("dialog")).not.toBeVisible();
    });
  });

  it("should open a drawer and close it by clicking an element in the background", async () => {
    render(<Default />);

    const renderedOpenButton = screen.getByText(OPEN_DRAWER_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await user.click(renderedOpenButton);
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

    await user.click(await screen.findByRole("presentation"));
    await waitFor(() => {
      expect(screen.getByRole("dialog")).not.toBeVisible();
    });
  });
});
