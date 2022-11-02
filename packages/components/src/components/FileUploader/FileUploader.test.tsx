import { render, screen } from "@testing-library/react";
import React from "react";
import { FileUploader, FileUploaderProps } from "./FileUploader";
import { FileUploaderButton } from "./FileUploaderButton";

const renderFileUploader = ({
  label = "Label",
  ...props
}: Partial<FileUploaderProps>) =>
  render(
    <FileUploader label={label} {...props}>
      <FileUploaderButton onChange={jest.fn()} variant="secondary">
        Upload
      </FileUploaderButton>
    </FileUploader>
  );

describe("<FileUploader />", () => {
  it("renders default state", () => {
    renderFileUploader({ label: "Employment contract", maxFileSize: "2MB" });

    expect(screen.getByText("Employment contract")).toBeInTheDocument();
    expect(
      screen.getByText("No file uploaded • Max. file size 2MB")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Upload")).toBeInTheDocument();
  });

  it("renders loading state", () => {
    renderFileUploader({
      label: "Passport scan",
      maxFileSize: "2MB",
      fileName: "my_file_name.pdf",
      fileSize: "1MB",
      progress: 50,
    });

    expect(screen.getByText("Passport scan")).toBeInTheDocument();
    expect(screen.getByText("my_file_name.pdf")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Cancel upload" })
    ).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders success state", () => {
    renderFileUploader({
      label: "Visa",
      maxFileSize: "2MB",
      fileName: "another_file_name.pdf",
      fileUrl: "http://file-url/my_file_name.pdf",
      fileSize: "1MB",
      progress: 100,
    });

    expect(screen.getByRole("link", { name: "Visa" })).toBeInTheDocument();
    expect(screen.getByText("another_file_name.pdf • 1MB")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Remove file" })
    ).toBeInTheDocument();
  });

  it("renders error state", () => {
    renderFileUploader({
      label: "Registration confirmation",
      maxFileSize: "2MB",
      fileName: "registration_confirmarion_v2.pdf",
      fileUrl: "http://file-url/my_file_name.pdf",
      fileSize: "1MB",
      progress: 100,
      errorMessage: "File is too large.",
    });

    expect(screen.getByText("Registration confirmation")).toBeInTheDocument();
    expect(
      screen.getByText("registration_confirmarion_v2.pdf • 1MB")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Remove file" })
    ).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("File is too large.");
  });
});
