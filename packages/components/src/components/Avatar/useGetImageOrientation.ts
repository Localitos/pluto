import { useEffect, useState } from "react";
import { getImageOrientation, Orientation } from "./getImageOrientation";

export const useGetImageOrientation = (
  src?: string,
): { orientation?: Orientation; hasError: boolean } => {
  const [orientation, setOrientation] = useState<Orientation | undefined>();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (src) {
      getImageOrientation(src)
        .then(setOrientation)
        .catch(() => setHasError(true));
    }
  }, [src]);

  return {
    orientation,
    hasError,
  };
};
