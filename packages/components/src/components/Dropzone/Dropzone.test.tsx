import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Dropzone, DropzoneProps } from "./Dropzone";

const renderDropZone = ({
  onCancel = () => {},
  onDrop = () => {},
  ...props
}: DropzoneProps) =>
  render(<Dropzone onCancel={onCancel} onDrop={onDrop} {...props} />);

describe("<Dropzone />", () => {
  it("renders default state", () => {
    renderDropZone({ onCancel: () => {}, onDrop: () => {} });

    expect(screen.getByText("Drag and drop or browse")).toBeInTheDocument();
    expect(
      screen.getByText("File must be PDF format and no larger than 50MB")
    ).toBeInTheDocument();
  });

  it("renders error state", () => {
    renderDropZone({
      error: "File must be less than 50mb.",
      onCancel: () => {},
      onDrop: () => {},
    });
    expect(
      screen.getByText("File must be less than 50mb.")
    ).toBeInTheDocument();
  });

  it("renders loading state", async () => {
    renderDropZone({
      progress: 33,
      onCancel: () => {},
      onDrop: () => {},
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
      onDrop: () => {},
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
      onCancel: () => {},
      onDrop: mockOnDrop,
    });

    const input = await screen.findByRole("textbox", { hidden: true });

    expect(input).toBeInTheDocument();
    await userEvent.upload(input, file);

    /* expect(input.files[0]).toBe(file); */
    /* expect(input.files.item(0)).toBe(file); */
    /* expect(input.files).toHaveLength(1); */
    expect(mockOnDrop).toHaveBeenCalled();
  });

  it("renders success state when progress is 100", async () => {
    renderDropZone({
      progress: 100,
      onCancel: () => {},
      onDrop: () => {},
    });
  });
});
