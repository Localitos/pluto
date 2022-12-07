import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Dropzone } from "./Dropzone";

// Disabling the overzealous rules.
// eslint-disable-next-line lodash/prefer-noop, @typescript-eslint/no-empty-function
const NOOP = (): void => {};

export default {
  component: Dropzone,
  title: "Components/Dropzone",
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => (
  <Dropzone {...args} onCancel={NOOP} onDrop={NOOP} />
);

export const Default = Template.bind({});

export const WithFileRestrictions = Template.bind({});
WithFileRestrictions.args = {
  fileTypes: {
    "image/jpeg": [".jpg", ".jpeg"],
    "application/pdf": [".pdf"],
  },
  maxFileSize: 12 * 1024 * 1024,
  maxNumFiles: 2,
};

export const Error = Template.bind({});
Error.args = {
  error: "The document failed to upload",
};

export const Loading = Template.bind({});
Loading.args = {
  progress: 50,
};
export const Success = Template.bind({});
Success.args = {
  progress: 100,
};

export const WithMockedSuccess = (): React.ReactElement => {
  const [progress, setProgress] = useState<number>(0);

  const [isUploading, setIsUploading] = useState(false);
  const [cancelClick, setCancelClick] = useState(false);

  useEffect(() => {
    if (isUploading && progress < 100) {
      setTimeout(() => {
        setProgress((progress) => progress + 10);
      }, 500);
    }
    if (cancelClick) {
      setIsUploading(false);
      setProgress(0);
      setCancelClick(false);
    }
  }, [isUploading, cancelClick, progress]);

  const onDrop = () => {
    setProgress(0);
    setIsUploading(true);
  };
  const onCancel = () => {
    setCancelClick(true);
  };

  return (
    <Dropzone
      fileTypes={{
        "application/pdf": [".pdf"],
      }}
      onCancel={onCancel}
      onDrop={onDrop}
      progress={progress}
    />
  );
};
