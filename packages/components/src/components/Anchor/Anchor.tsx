import React from "react";
import { Text } from "../../primitives/Text";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnchorAsOptions<Props = any> = React.ElementType<Props>;

export interface AnchorProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color"> {
  /** Sets the render element of the component. */
  as?: AnchorAsOptions;
  /** The contents of the anchor. Can be text or valid text related HTML, i.e. strong elements. */
  children: NonNullable<React.ReactNode>;
  /** Sets target to "_blank" and rel to "noreferrer noopener". */
  isExternal?: boolean;
  /** Used with React Router or NextJS to set the route the anchor links to. */
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore because we don't know the props coming from possible external libraries. Specifically for `as` prop.
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
  }
);

Anchor.displayName = "Anchor";

export { Anchor };
