import * as React from "react";

export interface BaseTextProps extends React.HTMLAttributes<HTMLElement> {
  /** Changes which HTML tag a component renders. */
  as?: keyof JSX.IntrinsicElements;
  /** The contents of the container. Any valid HTML. */
  children?: React.ReactNode;
  /** The URL that the hyperlink points to. */
  href?: string;
  /** The relationship of the linked URL as space-separated link types. */
  rel?: string;
  /** Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>). */
  target?: string;
}

/** The BaseText is the basis for Text. It handles the ref forwarding and other baseline props. */
const BaseText = React.forwardRef<HTMLSpanElement, BaseTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <span ref={ref} {...props}>
        {children}
      </span>
    );
  }
);

BaseText.displayName = "BaseText";

export { BaseText };
