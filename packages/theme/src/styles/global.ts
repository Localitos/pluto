import { globalCss } from "@stitches/react";
import { theme } from "../theme/default";

export const globalStyles = globalCss({
  "*": {
    margin: theme.space[0],
    padding: theme.space[0],
  },
  html: {
    fontSize: "100%",
  },
});
