import React from "react";
import { styled, theme } from "@localyze-pluto/theme";
import { Root, Indicator, ProgressProps } from "@radix-ui/react-progress";
import { SystemProp, Theme } from "@xstyled/styled-components";
import get from "lodash/get";

type ProgressBarSizeOptions = "large" | "small";

export interface ProgressBarProps {
  /** The progress value. */
  value: number;
  /** The color of the progress indicator */
  indicatorColor?: SystemProp<keyof Theme["colors"], Theme>;
  /** Overwrites the styles of the indicator. */
  indicatorStyle?: React.CSSProperties;
  /** The background color of the progress bar */
  backgroundcolor?: SystemProp<keyof Theme["colors"], Theme>;
  /** Sets the size of the progress bar. */
  size?: ProgressBarSizeOptions;
  /** Overwrites the styles of the progress bar. */
  style?: React.CSSProperties;
}

interface StyledProgressProps extends Omit<ProgressProps, "value"> {
  value: number;
  backgroundcolor?: SystemProp<keyof Theme["colors"], Theme>;
  h: SystemProp<keyof Theme["space"], Theme>;
  radius: SystemProp<keyof Theme["radii"], Theme>;
}

interface StyledIndicatorProps {
  backgroundcolor?: SystemProp<keyof Theme["colors"], Theme>;
  radius: SystemProp<keyof Theme["radii"], Theme>;
}

const StyledProgress = styled.div`
  background-color: ${(props: StyledProgressProps) =>
    get(
      theme.colors,
      String(props.backgroundcolor),
      theme.colors.colorBackgroundWeak
    )};
  border-radius: ${(props: StyledProgressProps) =>
    get(theme.radii, String(props.radius), "")};
  height: ${(props: StyledProgressProps) =>
    get(theme.space, String(props.h), "")};
  overflow: hidden;
  position: relative;
`;

const StyledIndicator = styled.div`
  height: 100%;
  width: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  border-radius: ${(props: StyledIndicatorProps) =>
    get(theme.radii, String(props.radius), "")};
  background-color: ${(props: StyledIndicatorProps) =>
    get(
      theme.colors,
      String(props.backgroundcolor),
      theme.colors.colorBackgroundPrimaryWeak
    )};
`;

/** Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. */
const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      size = "small",
      indicatorColor,
      backgroundcolor,
      indicatorStyle,
      ...props
    },
    ref
  ) => {
    const borderRadius = size === "large" ? "borderRadius50" : "borderRadius10";

    return (
      <StyledProgress
        as={Root}
        backgroundcolor={backgroundcolor}
        h={size === "large" ? "space40" : "space25"}
        radius={borderRadius}
        ref={ref}
        value={value}
        {...props}
      >
        <StyledIndicator
          as={Indicator}
          backgroundcolor={indicatorColor}
          radius={borderRadius}
          style={{
            transform: `translateX(-${100 - value}%)`,
            ...indicatorStyle,
          }}
        />
      </StyledProgress>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
