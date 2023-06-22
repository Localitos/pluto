import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Button } from "../Button";
import { Default } from "./Toast.stories";
import { useToast } from "./useToast";
import { ToastContainer } from "./ToastContainer";

const SampleApp = (): JSX.Element => {
  const toast = useToast();

  return (
    <Button
      onClick={() => toast("Toast message!", "success")}
      variant="primary"
    >
      Open Toast
    </Button>
  );
};

describe("<Toast />", () => {
  it("should open and close a toast", async () => {
    const user = userEvent.setup();
    render(
      <Default duration={1000} variant="success">
        This is the toast text.
      </Default>
    );

    const renderedOpenButtons = screen.getByRole("button");
    await act(() => user.click(renderedOpenButtons));

    const renderedToast = screen.getByText("This is the toast text.");
    expect(screen.getByRole("region")).toBeInTheDocument();
    expect(renderedToast).toBeInTheDocument();

    await waitFor(() => expect(renderedToast).not.toBeInTheDocument(), {
      timeout: 1000,
    });
  });
});

describe("<ToastContainer />", () => {
  it("should open a toast in the ToastContainer", async () => {
    const user = userEvent.setup();
    render(
      <ToastContainer>
        <SampleApp />
      </ToastContainer>
    );

    const renderedOpenButton = screen.getByRole("button");
    await act(() => user.click(renderedOpenButton));

    const renderedToast = screen.getByText("Toast message!");
    expect(screen.getByRole("region")).toBeInTheDocument();
    expect(renderedToast).toBeInTheDocument();
  });
});
