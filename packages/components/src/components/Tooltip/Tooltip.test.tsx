import { render, screen, waitFor } from "@testing-library/react";
import { UserEvent, userEvent } from "@testing-library/user-event";
import React from "react";
import { Default as TooltipComponent } from "./Tooltip.stories";

const OPEN_TOOLTIP_TEXT = "Hover or focus on me";

describe("<Tooltip />", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should open and close a tooltip on hover", async () => {
    render(<TooltipComponent />);
    const renderedOpenButton = screen.getByText(OPEN_TOOLTIP_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await user.hover(renderedOpenButton);
    expect(await screen.findByRole("tooltip")).toBeInTheDocument();

    await user.unhover(renderedOpenButton);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("should open and close a tooltip on focus", async () => {
    render(<TooltipComponent />);
    const renderedOpenButton = screen.getByText(OPEN_TOOLTIP_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    expect(document.body).toHaveFocus();

    await user.tab();
    expect(renderedOpenButton).toHaveFocus();
    expect(await screen.findByRole("tooltip")).toBeInTheDocument();

    await user.tab();
    expect(renderedOpenButton).not.toHaveFocus();
    await waitFor(() =>
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    );
  });
});
