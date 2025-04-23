import React from "react";
import {
  Root as RadixRoot,
  Indicator as RadixIndicator,
  CheckboxProps as RadixCheckboxProps,
} from "@radix-ui/react-checkbox";
import { styled, theme } from "@localyze-pluto/theme";
import { SystemProp, Theme } from "@xstyled/styled-components";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { Icon } from "../Icon";

const StyledCheckboxIndicator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;

  svg {
    stroke-width: 2.5;
  }
`;

export const CheckIndicator = (): React.ReactElement => {
  return (
    <StyledCheckboxIndicator as={RadixIndicator}>
      <Icon color="colorBackground" decorative icon="check" size="sizeIcon20" />
    </StyledCheckboxIndicator>
  );
};

export const IndeterminateIndicator = (): React.ReactElement => {
  return (
    <StyledCheckboxIndicator as={RadixIndicator}>
      <Icon color="colorBackground" decorative icon="minus" size="sizeIcon20" />
    </StyledCheckboxIndicator>
  );
};

export interface CheckboxProps extends Omit<RadixCheckboxProps, "id"> {
  /** Checkbox id is required for proper functioning of htmlFor attribute on label. */
  id: string;
  /** The contents of the anchor. Can be text or valid text related HTML, i.e. strong elements. */
  children: NonNullable<React.ReactNode>;
  /** Wrap or leave checkbox as is. */
  wrapped?: boolean;
  /** Provide error state of the checkbox. */
  error?: boolean;
}

const getCheckboxStyles = (
  wrapped: boolean,
):
  | Record<string, never>
  | {
      backgroundColor: SystemProp<keyof Theme["colors"], Theme>;
      padding: SystemProp<keyof Theme["space"], Theme>;
    } => {
  if (wrapped) {
    return {
      backgroundColor: "colorBackgroundWeak",
      padding: "d4",
    };
  }
  return {};
};

const StyledCheckbox = styled.input<{ error: string }>`
  width: 16px;
  min-width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: ${theme.space.d2};
  padding: 0;
  margin-bottom: auto;
  margin-top: 1px;

  &:focus {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 2px ${
      theme.colors.colorBackground
    }, 0 0 0 4px ${theme.colors.colorBackgroundPrimary};
    outline: none;
  },

  &[data-state=unchecked] {
    background-color: ${theme.colors.colorBackground};
    border: 1px solid ${(props) =>
      props.error === "true"
        ? theme.colors.colorBackgroundDestructive
        : theme.colors.colorBorder};

    &:hover {
      background-color: ${theme.colors.colorBackgroundStrong};
      border: 1px solid ${theme.colors.colorBorder};
    }
  
    &[data-disabled] {
      &:hover {
        background-color: ${theme.colors.colorBackground};
        border: 1px solid ${theme.colors.colorBackgroundStrong};
      }
    }
  },
  
  &[data-state=checked], &[data-state=indeterminate] {
    background-color: ${theme.colors.colorBackgroundPrimary};
    border: 1px solid ${theme.colors.colorBackgroundPrimary};

    &[data-disabled] {
      background-color: ${theme.colors.colorBackgroundStrong};
      border: 1px solid ${theme.colors.colorBackgroundStrong};
    }

    &:hover {
      background-color: ${theme.colors.colorBackgroundPrimaryStrong};
      border: 1px solid ${theme.colors.colorBackgroundPrimaryStrong};
    }
  },
  
  &[data-disabled] {
    background-color: ${theme.colors.colorBackground};
    border: 1px solid ${theme.colors.colorBackgroundStrong};
  
    &:hover {
      background-color: ${theme.colors.colorBackgroundStrong};
      border: 1px solid ${theme.colors.colorBackgroundStrong};
    }
  },
`;

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    { wrapped = false, error = false, id, checked, children, ...props },
    ref,
  ) => {
    return (
      <Box.div
        alignItems="center"
        borderRadius="borderRadius30"
        display="flex"
        flexDirection="row"
        {...getCheckboxStyles(wrapped)}
      >
        <StyledCheckbox
          as={RadixRoot}
          checked={checked}
          error={error.toString()}
          id={id}
          ref={ref}
          {...props}
        >
          {checked === "indeterminate" ? (
            <IndeterminateIndicator />
          ) : (
            <CheckIndicator />
          )}
        </StyledCheckbox>
        <Text.label
          color="colorTextStrongest"
          fontSize="fontSize20"
          htmlFor={id}
          lineHeight="lineHeight20"
        >
          {children}
        </Text.label>
      </Box.div>
    );
  },
);

export type CheckedState = boolean | "indeterminate";

Checkbox.displayName = "Checkbox";
