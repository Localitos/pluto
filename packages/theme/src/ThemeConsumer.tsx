import * as React from "react";
import { ThemeContext } from "@emotion/react";
import isFunction from "lodash/isFunction";
import type { ThemeShape } from "./types/generic-theme-shape";

export interface ThemeConsumerProps {
  children: ({ theme }: { theme: ThemeShape }) => React.ReactNode;
}
const ThemeConsumer = ({
  children,
  ...props
}: ThemeConsumerProps): React.ReactElement => {
  if (isFunction(children) === false) {
    throw new TypeError(
      "[ThemeConsumer]: You must pass a function as children"
    );
  }
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const newTheme = theme as ThemeShape;
        return children({ ...props, theme: newTheme });
      }}
    </ThemeContext.Consumer>
  );
};

export { ThemeConsumer };
