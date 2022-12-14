import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Default } from "./Toast.stories";

describe("<Toast />", () => {
  it("should open and close a toast", async () => {
    render(<Default variant="success">This is the toast text.</Default>);

    const renderedOpenButtons = screen.getByRole("button");
    await userEvent.click(renderedOpenButtons);

    const renderedToast = screen.getByText("This is the toast text.");
    expect(screen.getByRole("region")).toBeInTheDocument();
    expect(renderedToast).toBeInTheDocument();

    await waitFor(() => expect(renderedToast).not.toBeInTheDocument(), {
      timeout: 3000,
    });
  });
});
