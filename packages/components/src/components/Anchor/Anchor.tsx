import React from "react";
import { Text } from "../../primitives/Text";
import { BoxProps } from "../../primitives/Box";
export interface AnchorProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color">,
    BoxProps {
  /** Sets the render element of the component. */
  as?: React.ComponentType<any> | string; // eslint-disable-line @typescript-eslint/no-explicit-any
  /** The contents of the anchor. Can be text or valid text related HTML, i.e. strong elements. */
  children: NonNullable<React.ReactNode>;
  /** Sets target to "_blank" and rel to "noreferrer noopener". */
  isExternal?: boolean;
  /** Used with React Router to set the route the anchor links to. */
  to?: string;
}

/** An anchor is text that navigates the user from one webpage to another */
const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, isExternal, ...props }, ref) => {
    const externalProps = isExternal
      ? {
          target: "_blank",
          rel: "noreferrer noopener",
        }
      : {};

    return (
      <Text.a
        color={{
          _: "colorTextLink",
          hover: "colorTextLinkStrong",
          visited: "colorTextLinkVisited",
        }}
        ref={ref}
        textDecoration={{
          _: "none",
          hover: "underline",
          focus: "underline",
        }}
        {...props}
        {...externalProps}
      >
        {children}
      </Text.a>
    );
  },
);

Anchor.displayName = "Anchor";

export { Anchor };
