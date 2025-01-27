import { TooltipAnchor, useStoreState, useTooltipStore } from "@ariakit/react";
import { render, screen, waitFor } from "@testing-library/react";
import { UserEvent, userEvent } from "@testing-library/user-event";
import React from "react";
import { Button } from "../Button";
import { Tooltip } from "./Tooltip";

const OPEN_TOOLTIP_TEXT = "Hover or focus on me";

const MockComponent = (): JSX.Element => {
  const tooltip = useTooltipStore({
    defaultOpen: false,
  });
  const mounted = useStoreState(tooltip, "mounted");

  return (
    <>
      <TooltipAnchor render={<Button variant="secondary" />} store={tooltip}>
        Hover or focus on me
      </TooltipAnchor>
      <Button variant="secondary">Another button</Button>
      {mounted && (
        <Tooltip store={tooltip}>This is the content of the tooltip.</Tooltip>
      )}
    </>
  );
};

describe("<Tooltip />", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should open and close a tooltip on hover", async () => {
    render(<MockComponent />);
    const renderedOpenButton = screen.getByText(OPEN_TOOLTIP_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    await user.hover(renderedOpenButton);

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });

    await user.unhover(renderedOpenButton);

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  it("should open and close a tooltip on focus", async () => {
    render(<MockComponent />);
    const renderedOpenButton = screen.getByText(OPEN_TOOLTIP_TEXT);
    expect(renderedOpenButton).toBeInTheDocument();

    expect(document.body).toHaveFocus();

    await user.tab();
    expect(renderedOpenButton).toHaveFocus();
    expect(await screen.findByRole("tooltip")).toBeInTheDocument();

    await user.tab();
    expect(
      screen.getByRole("button", { name: "Another button" }),
    ).toHaveFocus();

    await waitFor(() => expect(renderedOpenButton).not.toHaveFocus());

    await waitFor(() =>
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument(),
    );
  });
});
