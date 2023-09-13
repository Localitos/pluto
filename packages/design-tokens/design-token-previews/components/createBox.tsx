import React from "react";
import { TokenEntry } from "../types/TokenEntry";
import { Box } from "../../../components/src/primitives/Box";

export const createBox =
  (tokenAttribute: string, defaultProps = {}, text = "\0") =>
  // eslint-disable-next-line react/display-name
  ([, token]: TokenEntry): JSX.Element => {
    const props = {
      ...defaultProps,
      [tokenAttribute]: token.value,
    };
    return <Box.div {...props}>{text}</Box.div>;
  };
