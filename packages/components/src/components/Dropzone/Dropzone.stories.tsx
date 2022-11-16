import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { FileWithPath } from "react-dropzone";
import { Dropzone } from "./Dropzone";

const resolveAfter2Seconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Document uploaded successfully");
    }, 2000);
  });
};

const sendDocument = async (
  file: FileWithPath,
  onProgress?: (progressPercentage: number) => void
) => {
  let current = 0;
  let interval = null;

  const useCallback = () => {
    if (onProgress !== undefined) {
      onProgress(current);
    }
    const nextCount = current++;
    if (nextCount === 100) {
      clearInterval(interval);
    }
  };

  interval = setInterval(useCallback, 10);

  if (current < 100) {
    return await resolveAfter2Seconds();
  }
};

const cancelDocumentUpload = (name: string) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      return reject(new Error(`${name} failed to upload`));
    }, 1000);
  });
};

export default {
  component: Dropzone,
  title: "Components/Dropzone",
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => (
  <Dropzone
    {...args}
    cancelDocumentUpload={cancelDocumentUpload}
    sendDocument={sendDocument}
  />
);

export const Default = Template.bind({});

export const WithDocumentUploadSuccess = (): React.ReactElement => (
  <Dropzone
    cancelDocumentUpload={cancelDocumentUpload}
    sendDocument={sendDocument}
  />
);
