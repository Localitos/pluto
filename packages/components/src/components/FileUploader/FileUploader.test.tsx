import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { theme, ThemeProvider } from "@localyze-pluto/theme";
import { FileUploader, FileUploaderProps } from "./FileUploader";
import { FileUploaderButton } from "./FileUploaderButton";

const FILE_URL = "http://file-url/my_visa_file_name.pdf";

const renderFileUploader = ({
  label = "Label",
  ...props
}: Partial<FileUploaderProps>) =>
  render(
    <ThemeProvider theme={theme}>
      <FileUploader label={label} {...props}>
        <FileUploaderButton onChange={jest.fn()} variant="secondary">
          Upload
        </FileUploaderButton>
      </FileUploader>
    </ThemeProvider>,
  );

describe("<FileUploader />", () => {
  it("renders default state", () => {
    renderFileUploader({ label: "Employment contract", maxFileSize: "2MB" });

    expect(screen.getByText("Employment contract")).toBeInTheDocument();
    expect(
      screen.getByText("No file uploaded • Max. file size 2MB"),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Upload" })).toBeInTheDocument();
  });

  describe('when state is "loading"', () => {
    const FILE_LABEL = "Passport scan";
    const FILE_NAME = "my_file_name.pdf";

    it("renders correctly", () => {
      renderFileUploader({
        label: FILE_LABEL,
        maxFileSize: "2MB",
        fileName: FILE_NAME,
        fileSize: "1MB",
        progress: 50,
      });

      expect(screen.getByText("Passport scan")).toBeInTheDocument();
      expect(screen.getByText("my_file_name.pdf")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Cancel upload" }),
      ).toBeInTheDocument();
      expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    it("calls onCancel when Cancel button is clicked", async () => {
      const mockOnCancel = jest.fn();
      renderFileUploader({
        label: FILE_LABEL,
        maxFileSize: "2MB",
        fileName: FILE_NAME,
        fileSize: "1MB",
        progress: 50,
        onCancel: mockOnCancel,
      });

      const cancelButton = await screen.findByRole("button", {
        name: "Cancel upload",
      });
      await userEvent.click(cancelButton);

      expect(mockOnCancel).toHaveBeenCalled();
    });
  });

  describe('when state is "success"', () => {
    it("renders correctly", () => {
      renderFileUploader({
        label: "Visa",
        maxFileSize: "2MB",
        fileName: "my_visa_file.pdf",
        fileUrl: FILE_URL,
        fileSize: "1MB",
        progress: 100,
      });

      expect(screen.getByRole("link", { name: "Visa" })).toBeInTheDocument();
      expect(screen.getByText("my_visa_file.pdf • 1MB")).toBeInTheDocument();
      expect(
        // eslint-disable-next-line sonarjs/no-duplicate-string
        screen.getByRole("button", { name: "Remove file" }),
      ).toBeInTheDocument();
    });

    it("does not render file information if a file name was not provided", () => {
      renderFileUploader({
        label: "Visa",
        maxFileSize: "2MB",
        fileUrl: FILE_URL,
        fileSize: "1MB",
        progress: 100,
      });

      expect(screen.getByRole("link", { name: "Visa" })).toBeInTheDocument();
      expect(screen.queryByText(/no file uploaded/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/1mb/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/2mb/i)).not.toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Remove file" }),
      ).toBeInTheDocument();
    });

    it("calls onRemove when Remove button is clicked", async () => {
      const mockOnRemove = jest.fn();
      renderFileUploader({
        label: "Visa",
        maxFileSize: "2MB",
        fileUrl: FILE_URL,
        fileSize: "1MB",
        progress: 100,
        onRemove: mockOnRemove,
      });

      const removeButton = await screen.findByRole("button", {
        name: "Remove file",
      });
      await userEvent.click(removeButton);

      expect(mockOnRemove).toHaveBeenCalled();
    });

    it("does not submit a form when removing a file", async () => {
      const mockOnSubmit = jest.fn();

      render(
        <ThemeProvider theme={theme}>
          <form onSubmit={mockOnSubmit}>
            <FileUploader
              fileSize={"1MB"}
              fileUrl={FILE_URL}
              label={"passport"}
              maxFileSize={"2MB"}
              onRemove={jest.fn()}
              progress={100}
            >
              <FileUploaderButton onChange={jest.fn()} variant="secondary">
                Upload
              </FileUploaderButton>
            </FileUploader>
          </form>
        </ThemeProvider>,
      );

      const removeButton = await screen.findByRole("button", {
        name: "Remove file",
      });
      await userEvent.click(removeButton);

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  describe("when there is an error", () => {
    it("renders label and the Remove button if it has a fileName", () => {
      renderFileUploader({
        label: "Visa Confirmation",
        maxFileSize: "2MB",
        fileName: "visa_v2.pdf",
        fileUrl: FILE_URL,
        fileSize: "1MB",
        progress: 100,
        errorMessage: "File is too large.",
      });

      expect(screen.getByText("Visa Confirmation")).toBeInTheDocument();
      expect(screen.getByText("visa_v2.pdf • 1MB")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Remove file" }),
      ).toBeInTheDocument();
      expect(screen.getByRole("alert")).toHaveTextContent("File is too large.");
    });

    it("renders Upload button but not Remove button when there is an errorMessage", () => {
      renderFileUploader({
        label: "Permit",
        errorMessage: "You must upload a file",
      });

      expect(screen.getByText("Permit")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Upload" }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "Remove file" }),
      ).not.toBeInTheDocument();
      expect(screen.getByRole("alert")).toHaveTextContent(
        "You must upload a file",
      );
    });

    it("renders Upload button but not alert if there is no errorMessage", () => {
      renderFileUploader({
        label: "Permit",
        errorMessage: "",
      });

      expect(screen.getByText("Permit")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Upload" }),
      ).toBeInTheDocument();
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });

  it('renders correctly when state is "disabled"', () => {
    renderFileUploader({
      label: "Registration confirmation",
      maxFileSize: "2MB",
      progress: 0,
      disabled: true,
    });

    expect(screen.getByText("Registration confirmation")).toBeInTheDocument();
    expect(
      screen.getByText("No file uploaded • Max. file size 2MB"),
    ).toBeInTheDocument();

    const uploadButton = screen.getByRole("button", { name: "Upload" });
    expect(uploadButton).toBeInTheDocument();
    expect(uploadButton).toBeDisabled();
  });
});
