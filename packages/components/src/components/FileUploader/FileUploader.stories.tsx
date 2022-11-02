import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import Uppy from "@uppy/core";
import { FileUploader } from "./FileUploader";
import { FileUploaderButton } from "./FileUploaderButton";

export default {
  component: FileUploader,
  title: "Components/FileUploader",
} as ComponentMeta<typeof FileUploader>;

const Template: ComponentStory<typeof FileUploader> = (args) => (
  <FileUploader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Employment contract",
  maxFileSize: "2MB",
  children: (
    <FileUploaderButton trailingIcon="ArrowUpTrayIcon" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Visa",
  fileName: "file_to_upload_with_a_long_name_v2.pdf",
  progress: 50,
  children: (
    <FileUploaderButton trailingIcon="ArrowUpTrayIcon" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

export const Success = Template.bind({});
Success.args = {
  label: "Passport scan",
  fileName: "employment_contract_v2.pdf",
  fileSize: "2MB",
  fileUrl: "http://file-path/file.pdf",
  children: (
    <FileUploaderButton trailingIcon="ArrowUpTrayIcon" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Registration confirmation",
  fileName: "file_with_error_too_large.pdf",
  fileSize: "7MB",
  errorMessage: "File size is too large. You can upload files up to 5MB.",
  children: (
    <FileUploaderButton trailingIcon="ArrowUpTrayIcon" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

export const WithUppy = (): React.ReactElement => {
  const uppy = new Uppy();
  const [fileInformation, setFileInformation] = useState<{
    fileName: string;
    fileSize: string;
    fileUrl?: string;
  } | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = [...event.target.files];

      for (const file of files) {
        try {
          uppy.addFile({
            source: "file input",
            name: file.name,
            type: file.type,
            data: file,
          });
        } catch {
          // Do something
        }
      }
    }
  };

  uppy.on("file-added", (file) => {
    setFileInformation({ fileName: file.name, fileSize: `${file.size} bytes` });
    // Start single upload
  });

  uppy.on("file-removed", () => {
    setFileInformation(null);
  });

  uppy.on("complete", (result) => {
    const file = result.successful[0];
    setFileInformation({
      fileName: file.name,
      fileSize: `${file.size} bytes`,
      fileUrl: file.uploadURL,
    });
  });

  return (
    <FileUploader
      label="Employment Contract"
      {...fileInformation}
      maxFileSize="2MB"
    >
      <FileUploaderButton
        id="my-uploader"
        onChange={onChange}
        variant="secondary"
      >
        Upload
      </FileUploaderButton>
    </FileUploader>
  );
};
