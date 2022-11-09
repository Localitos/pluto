import isEmpty from "lodash/isEmpty";
import { FileUploaderStatus } from "../types/FileUploaderStatus";

export const getStatus = (
  progress: number,
  fileUrl?: string,
  errorMessage?: string
): FileUploaderStatus => {
  if (progress > 0 && progress < 100) return "loading";
  if (!isEmpty(fileUrl)) return "success";
  if (!isEmpty(errorMessage)) return "error";
  return "waiting";
};
