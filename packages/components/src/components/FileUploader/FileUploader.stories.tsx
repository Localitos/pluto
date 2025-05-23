import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { Uppy } from "@uppy/core";
import { Button } from "../Button";
import { FileUploader } from "./FileUploader";
import { FileUploaderButton } from "./FileUploaderButton";

const FILE_URL = "http://file-path/file.pdf";

export default {
  component: FileUploader,
  title: "Components/FileUploader",
} as Meta<typeof FileUploader>;

const Template: StoryFn<typeof FileUploader> = (args) => (
  <FileUploader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Employment contract",
  maxFileSize: "2MB",
  children: (
    <FileUploaderButton
      accept=".pdf,.docx"
      trailingIcon="arrow-up-from-line"
      variant="secondary"
    >
      Upload
    </FileUploaderButton>
  ),
};

Default.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const Multiline = Template.bind({});
Multiline.args = {
  label:
    "Certificate of valid health insurance (travel health insurance with minimum coverage of 30.000 € and valid during visa timeframe)",
  fileSize: "2MB",
  children: (
    <FileUploaderButton trailingIcon="arrow-up-from-line" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

Multiline.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Visa",
  fileName: "file_to_upload_with_a_long_name_v2.pdf",
  progress: 50,
  children: (
    <FileUploaderButton trailingIcon="arrow-up-from-line" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

Loading.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const Success = Template.bind({});
Success.args = {
  label: "Passport scan",
  fileSize: "2MB",
  fileName: "my_passport_scap.pdf",
  fileUrl: FILE_URL,
  children: (
    <FileUploaderButton trailingIcon="arrow-up-from-line" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

Success.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const SuccessWithoutFileInfo = Template.bind({});
SuccessWithoutFileInfo.args = {
  label: "Passport scan",
  fileUrl: FILE_URL,
  children: (
    <FileUploaderButton trailingIcon="arrow-up-from-line" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

SuccessWithoutFileInfo.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Registration confirmation",
  fileName: "file_with_error_too_large.pdf",
  fileSize: "7MB",
  errorMessage: "File size is too large. You can upload files up to 5MB.",
  children: (
    <FileUploaderButton trailingIcon="arrow-up-from-line" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

WithError.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const DisabledWithoutFile = Template.bind({});
DisabledWithoutFile.args = {
  label: "Employment Contract",
  maxFileSize: "3MB",
  disabled: true,
  children: (
    <FileUploaderButton trailingIcon="arrow-up-from-line" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

DisabledWithoutFile.parameters = {
  chromatic: { viewports: [320, 1200] },
};

export const DisabledWithFile = Template.bind({});
DisabledWithFile.args = {
  fileUrl: FILE_URL,
  label: "Employment Contract",
  maxFileSize: "3MB",
  disabled: true,
  children: (
    <FileUploaderButton trailingIcon="arrow-up-from-line" variant="secondary">
      Upload
    </FileUploaderButton>
  ),
};

DisabledWithFile.parameters = {
  chromatic: { viewports: [320, 1200] },
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
    setFileInformation({
      fileName: String(file.name),
      fileSize: `${file.size} bytes`,
    });
    // Start single upload
  });

  uppy.on("file-removed", () => {
    setFileInformation(null);
  });

  uppy.on("complete", (result) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (result.successful) {
      const file = result.successful[0];
      setFileInformation({
        fileName: String(file.name),
        fileSize: `${file.size} bytes`,
        fileUrl: file.uploadURL,
      });
    }
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

export const HandlingSubmitErrors = (): React.ReactElement => {
  const [file, setFile] = useState<File | undefined>();
  const [error, setError] = useState("");

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (file) {
      setError("");
      setFile(file);
    } else {
      setError("This is a required field");
      setFile(undefined);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <FileUploader errorMessage={error} fileName={file?.name} label="Passport">
        <FileUploaderButton
          id="upload-passport"
          onChange={(ev) => {
            setFile(ev.target.files?.[0]);
            setError("");
          }}
          type="button"
          variant={"secondary"}
        >
          Upload
        </FileUploaderButton>
      </FileUploader>
      <Button
        style={{
          marginTop: "30px",
        }}
        type="submit"
        variant="primary"
      >
        Submit
      </Button>
    </form>
  );
};

HandlingSubmitErrors.parameters = {
  docs: {
    description: {
      story:
        "If you want to handle form submissions checking for missing data.",
    },
  },
};

export const WithRequiredButton = (): React.ReactElement => {
  const [file, setFile] = useState<File | undefined>();
  const [error, setError] = useState("");

  const onSubmit = (
    ev: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    ev.preventDefault();

    if (file) {
      setError("");
      setFile(file);
    } else {
      setError("Please upload a file");
      setFile(undefined);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <FileUploader errorMessage={error} fileName={file?.name} label="Passport">
        <FileUploaderButton
          id="upload-passport"
          onChange={(ev) => {
            setFile(ev.target.files?.[0]);
            setError("");
          }}
          required
          type="button"
          variant={"secondary"}
        >
          Upload
        </FileUploaderButton>
      </FileUploader>
      <Button
        onClick={onSubmit}
        style={{
          marginTop: "30px",
        }}
        type="submit"
        variant="primary"
      >
        Submit
      </Button>
    </form>
  );
};

WithRequiredButton.parameters = {
  docs: {
    description: {
      story:
        "If you want to use required property on the FileUploaderButton to allow form submissions only with filled data.",
    },
  },
};
