import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import compact from "lodash/compact";
import values from "lodash/values";
import toUpper from "lodash/toUpper";
import { FileTypes } from "./Dropzone";

export const fileSizeInMb = (fileSize: number): number =>
  Math.round(fileSize / 1024 / 1024);

export const getFileExtensions = (fileTypes: FileTypes): string =>
  map(values(fileTypes).flat(), (extension) =>
    toUpper(extension.slice(1))
  ).join(", ");

export const getFileRestrictionText = (
  fileTypes: FileTypes,
  maxFileSize?: number
): string | undefined => {
  if (isEmpty(fileTypes) && !maxFileSize) {
    return;
  }

  const fileExtensions = !isEmpty(fileTypes) && getFileExtensions(fileTypes);

  return compact([
    "File must be ",
    fileExtensions && `${fileExtensions} format`,
    fileExtensions && maxFileSize && " and ",
    maxFileSize && `no larger than ${fileSizeInMb(maxFileSize)}MB`,
  ]).join("");
};
