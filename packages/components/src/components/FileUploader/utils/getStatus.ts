import isEmpty from "lodash/isEmpty";
import { FileUploaderStatus } from "../types/FileUploaderStatus";

export const getStatus = ({
  progress,
  fileUrl,
  errorMessage,
  required,
}: {
  progress: number;
  fileUrl?: string;
  errorMessage?: string;
  required?: boolean;
}): FileUploaderStatus => {
  if (progress > 0 && progress < 100) return "loading";
  if (!isEmpty(fileUrl)) return "success";
  if (!isEmpty(errorMessage)) return "error";
  if (!isEmpty(errorMessage) && required && !fileUrl) return "error";
  return "waiting";
};
