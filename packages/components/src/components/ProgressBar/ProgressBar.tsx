import React from "react";
import { styled, theme } from "@localyze-pluto/theme";
import { Root, Indicator, ProgressProps } from "@radix-ui/react-progress";

const StyledProgress = styled.div`
  background-color: ${theme.colors.colorBackgroundWeak};
  border-radius: ${theme.radii.borderRadius10};
  height: 6px;
  overflow: hidden;
  position: relative;
`;

const StyledIndicator = styled.div`
  height: 100%;
  width: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  border-radius: ${theme.radii.borderRadius10};
  background-color: ${theme.colors.colorBackgroundPrimaryWeak};
`;

export interface ProgressBarProps extends Omit<ProgressProps, "value"> {
  /** The progress value. */
  value: number;
}

/** Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. */
const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value, ...props }, ref) => (
    <StyledProgress as={Root} ref={ref} value={value} {...props}>
      <StyledIndicator
        as={Indicator}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </StyledProgress>
  )
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
