import React from "react";
import { styled, theme } from "@localyze-pluto/theme";
import { Root, Indicator, ProgressProps } from "@radix-ui/react-progress";
import { SystemProp, Theme } from "@xstyled/styled-components";
import get from "lodash/get";

export interface ProgressBarProps {
  /** The progress value. */
  value: number;
  /** The height of the progress bar */
  h?: SystemProp<keyof Theme["space"], Theme>;
  /** The color of the progress indicator */
  indicatorColor?: SystemProp<keyof Theme["colors"], Theme>;
  /** The background color of the progress bar */
  backgroundColor?: SystemProp<keyof Theme["colors"], Theme>;
  /** The border radius of the progress bar */
  borderRadius?: SystemProp<keyof Theme["radii"], Theme>;
}

interface StyledProgressProps extends Omit<ProgressProps, "value"> {
  value: number;
  background?: SystemProp<keyof Theme["colors"], Theme>;
  h?: SystemProp<keyof Theme["space"], Theme>;
  radius?: SystemProp<keyof Theme["radii"], Theme>;
}

interface StyledIndicatorProps {
  background?: SystemProp<keyof Theme["colors"], Theme>;
  radius?: SystemProp<keyof Theme["radii"], Theme>;
}

const StyledProgress = styled.div`
  background-color: ${(props: StyledProgressProps) =>
    get(
      theme.colors,
      String(props.background),
      theme.colors.colorBackgroundWeak
    )};
  border-radius: ${(props: StyledProgressProps) =>
    get(theme.radii, String(props.radius), theme.radii.borderRadius10)};
  height: ${(props: StyledProgressProps) =>
    get(theme.space, String(props.h), theme.space.space25)};
  overflow: hidden;
  position: relative;
`;

const StyledIndicator = styled.div`
  height: 100%;
  width: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  border-radius: ${(props: StyledIndicatorProps) =>
    get(theme.radii, String(props.radius), theme.radii.borderRadius10)};
  background-color: ${(props: StyledIndicatorProps) =>
    get(
      theme.colors,
      String(props.background),
      theme.colors.colorBackgroundPrimaryWeak
    )};
`;

/** Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. */
const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    { value, h, indicatorColor, backgroundColor, borderRadius, ...props },
    ref
  ) => (
    <StyledProgress
      as={Root}
      background={backgroundColor}
      h={h}
      radius={borderRadius}
      ref={ref}
      value={value}
      {...props}
    >
      <StyledIndicator
        as={Indicator}
        background={indicatorColor}
        radius={borderRadius}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </StyledProgress>
  )
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
