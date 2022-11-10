import isEmpty from "lodash/isEmpty";
import { FileUploaderStatus } from "../types/FileUploaderStatus";

export const getStatus = ({
  progress,
  disabled = false,
  fileUrl,
  errorMessage,
}: {
  progress: number;
  disabled?: boolean;
  fileUrl?: string;
  errorMessage?: string;
}): FileUploaderStatus => {
  if (disabled) return "disabled";
  if (progress > 0 && progress < 100) return "loading";
  if (!isEmpty(fileUrl)) return "success";
  if (!isEmpty(errorMessage)) return "error";
  return "waiting";
};
