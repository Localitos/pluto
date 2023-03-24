import React from "react";
import { Root, Indicator } from "@radix-ui/react-progress";
import { SystemProp, Theme } from "@xstyled/styled-components";
import { Box } from "../../primitives/Box";

type ProgressBarSizeOptions = "large" | "small";

export interface ProgressBarProps {
  /** The progress value. */
  value: number;
  /** The color of the progress indicator */
  indicatorColor?: SystemProp<keyof Theme["colors"], Theme>;
  /** The background color of the progress bar */
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
  /** Sets the size of the progress bar. */
  size?: ProgressBarSizeOptions;
}

/** Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. */
const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    { value, size = "small", indicatorColor, backgroundColor, ...props },
    ref
  ) => {
    const borderRadius = size === "large" ? "borderRadius50" : "borderRadius10";

    return (
      <Box.div
        as={Root}
        backgroundColor={backgroundColor || "colorBackgroundWeak"}
        borderRadius={borderRadius}
        h={size === "large" ? "0.75rem" : "0.4rem"}
        overflow="hidden"
        position="relative"
        ref={ref}
        value={value}
        {...props}
      >
        <Box.div
          as={Indicator}
          backgroundColor={indicatorColor || "colorBackgroundPrimaryWeak"}
          borderRadius={borderRadius}
          h="100%"
          style={{ transform: `translateX(-${100 - value}%)` }}
          transition="transform 660ms cubic-bezier(0.65, 0, 0.35, 1)"
          w="100%"
        />
      </Box.div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
