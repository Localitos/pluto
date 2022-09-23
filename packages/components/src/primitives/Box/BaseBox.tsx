import * as React from "react";
import type { CSSProp } from "../../types";

export interface BaseBoxProps
  extends React.HTMLAttributes<HTMLElement>,
    CSSProp {
  /** Changes which HTML tag a component renders. */
  as?: keyof JSX.IntrinsicElements;
  /** The contents of the container. Any valid HTML. */
  children?: React.ReactNode;
  /** Boolean to set the aria-hidden prop of the container. */
  decorative?: boolean;
}

/** The BaseBox is the basis for Box. It handles the ref forwarding and other baseline props. */
const BaseBox = React.forwardRef<HTMLDivElement, BaseBoxProps>(
  ({ children, decorative, ...props }, ref) => (
    <div aria-hidden={decorative ? true : undefined} ref={ref} {...props}>
      {children}
    </div>
  )
);

BaseBox.displayName = "BaseBox";

export { BaseBox };
