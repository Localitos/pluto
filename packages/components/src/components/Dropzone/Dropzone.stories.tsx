import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import Uppy from "@uppy/core";
import { Dropzone } from "./Dropzone";

const resolveAfter2Seconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

const sendDocument = async (
  file: File,
  onProgress?: (progressPercentage: number) => void
) => {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  return result;
};

// const sendDocument = async (
//   file: File,
//   onProgress?: (progressPercentage: number) => void
// ) => {
//   // let count = 0;

//   // setTimeout(() => {
//   //   const intervalID = setInterval(() => {
//   //     if (count === 100) {
//   //       clearInterval(intervalID);
//   //     } else {
//   //       count++;
//   //     }
//   //   }, 100);
//   // }, 2000);

//   // if (onProgress !== undefined) {
//   //   onProgress(count);
//   // }

//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       return reject(new Error("It broke"));
//     }, 5000);
//   });
// };

const cancelDocumentUpload = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      return reject(new Error("It broke"));
    }, 1000);
  });
};

export default {
  component: Dropzone,
  title: "Components/Dropzone",
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => (
  <Dropzone {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithDocumentUpload = (): React.ReactElement => (
  <Dropzone
    cancelDocumentUpload={cancelDocumentUpload}
    sendDocument={sendDocument}
  />
);
