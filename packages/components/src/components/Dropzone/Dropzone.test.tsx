import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Dropzone, DropzoneProps } from "./Dropzone";

// Disabling the overzealous rules.
// eslint-disable-next-line lodash/prefer-noop, @typescript-eslint/no-empty-function
const NOOP = (): void => {};

const renderDropZone = ({
  onCancel = NOOP,
  onDrop = NOOP,
  ...props
}: DropzoneProps) =>
  render(<Dropzone onCancel={onCancel} onDrop={onDrop} {...props} />);

describe("<Dropzone />", () => {
  it("renders default state", () => {
    renderDropZone({ onCancel: NOOP, onDrop: NOOP });

    expect(
      screen.getByText("Drag and drop or click to select a file")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("File must be PDF format and no larger than 50MB")
    ).not.toBeInTheDocument();
  });

  it("renders file restriction text", () => {
    renderDropZone({
      onCancel: NOOP,
      onDrop: NOOP,
      fileTypes: {
        "image/jpeg": [".jpg", ".jpeg"],
        "application/pdf": [".pdf"],
      },
      maxFileSize: 12 * 1024 * 1024,
    });

    expect(
      screen.getByText("Drag and drop or click to select a file")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "File must be JPG, JPEG, PDF format, no larger than 12MB, and you can upload only 1 file."
      )
    ).toBeInTheDocument();
  });

  it("renders error state", () => {
    renderDropZone({
      error: "File must be less than 50mb.",
      onCancel: NOOP,
      onDrop: NOOP,
    });
    expect(
      screen.getByText("File must be less than 50mb.")
    ).toBeInTheDocument();
  });

  it("renders loading state", async () => {
    renderDropZone({
      progress: 33,
      onCancel: NOOP,
      onDrop: NOOP,
    });

    const cancelButton = await screen.findByRole("button", {
      name: /cancel upload/i,
    });
    expect(cancelButton).toBeInTheDocument();
  });

  it("calls onCancel when Cancel button is clicked", async () => {
    const mockOnCancel = jest.fn();
    renderDropZone({
      progress: 33,
      onCancel: mockOnCancel,
      onDrop: NOOP,
    });

    const cancelButton = await screen.findByRole("button", {
      name: /cancel upload/i,
    });

    await userEvent.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalled();
  });

  it("calls onDrop when file is dropped", async () => {
    const mockOnDrop = jest.fn();
    const file = new File(["hello"], "dummy.pdf", {
      type: "application/pdf",
    });
    renderDropZone({
      onCancel: NOOP,
      onDrop: mockOnDrop,
    });

    const input = await screen.findByRole("textbox", { hidden: true });

    expect(input).toBeInTheDocument();
    await userEvent.upload(input, file);

    expect(mockOnDrop).toHaveBeenCalled();
  });

  it("renders success state when progress is 100", async () => {
    renderDropZone({
      progress: 100,
      onCancel: NOOP,
      onDrop: NOOP,
    });
    expect(
      screen.queryByRole("button", {
        name: /cancel upload/i,
      })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("File must be PDF format and no larger than 50MB")
    ).not.toBeInTheDocument();
  });
});
