import React from "react";
import includes from "lodash/includes";
import replace from "lodash/replace";
import { TokenEntry } from "../types/TokenEntry";
import { Box } from "../../../components/src/primitives/Box";

export const createBox =
  (tokenAttribute: string, defaultProps = {}, text = "\0") =>
  // eslint-disable-next-line react/display-name
  ([, token]: TokenEntry): JSX.Element => {
    let tokenValue = token.value;
    if (includes(token.value, "-")) {
      tokenValue = replace(token.value, "-", "");
    }
    const props = {
      ...defaultProps,
      [tokenAttribute]: tokenValue,
    };
    return <Box.div {...props}>{text}</Box.div>;
  };
