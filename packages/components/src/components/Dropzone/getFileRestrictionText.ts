import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import compact from "lodash/compact";
import values from "lodash/values";
import toUpper from "lodash/toUpper";
import { FileTypes } from "./Dropzone";

const formatBytes = (bytes: number, decimals = 0) => {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm))}${
    sizes[i]
  }`;
};

export const fileSizeInMb = (fileSize: number): number =>
  Math.round(fileSize / 1024 / 1024);

export const getFileExtensions = (fileTypes: FileTypes): string =>
  map(values(fileTypes).flat(), (extension) =>
    toUpper(extension.slice(1))
  ).join(", ");

export const getFileRestrictionText = (
  fileTypes: FileTypes,
  maxNumFiles: number,
  maxFileSize?: number
): string | undefined => {
  if (isEmpty(fileTypes) && !maxFileSize) {
    return;
  }

  const tooManyFilesText = `You can upload ${maxNumFiles} file${
    maxNumFiles > 1 ? `s.` : `.`
  }`;
  const fileExtensions = !isEmpty(fileTypes) && getFileExtensions(fileTypes);

  return compact([
    tooManyFilesText,
    " File must be ",
    fileExtensions && `${fileExtensions} format`,
    fileExtensions && maxFileSize && ", ",
    maxFileSize && `no larger than ${formatBytes(maxFileSize)}.`,
  ]).join("");
};
