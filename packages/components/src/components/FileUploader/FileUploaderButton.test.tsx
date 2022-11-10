import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { FileUploaderButton } from "./FileUploaderButton";

describe("<FileUploaderButton />", () => {
  it("calls onChange", async () => {
    const mockOnChange = jest.fn();
    const mockFile = new File(["some content"], "mock-file-name.png", {
      type: "image/png",
    });

    render(
      <FileUploaderButton
        id="file-uploader"
        onChange={mockOnChange}
        variant="primary"
      >
        Upload
      </FileUploaderButton>
    );

    const input = screen.getByLabelText("Upload");

    await userEvent.upload(input, mockFile);

    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({ type: "change" })
    );
    expect((input as HTMLInputElement).files).toHaveLength(1);
  });

  it("passes accept file extensions to inner input element", () => {
    render(
      <FileUploaderButton
        accept=".pdf,.xls"
        id="file-uploader"
        variant="primary"
      >
        Upload
      </FileUploaderButton>
    );

    const input = screen.getByLabelText("Upload");
    expect(input).toHaveAttribute("accept", ".pdf,.xls");
  });
});
