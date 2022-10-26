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
  padding-bottom: ${theme.space.space10};

  svg {
    stroke-width: 2.5;
  }
`;

export const CheckIndicator = (): React.ReactElement => {
  return (
    <StyledCheckboxIndicator as={RadixIndicator} data-testid="checkbox-check">
      <Icon
        color="colorBackground"
        decorative={true}
        icon="CheckIcon"
        size="sizeIcon30"
      />
    </StyledCheckboxIndicator>
  );
};

export const IndeterminateIndicator = (): React.ReactElement => {
  return (
    <StyledCheckboxIndicator
      as={RadixIndicator}
      data-testid="checkbox-indeterminate"
    >
      <Icon
        color="colorBackground"
        decorative={true}
        icon="MinusSmallIcon"
        size="sizeIcon30"
      />
    </StyledCheckboxIndicator>
  );
};

export interface CheckboxRootProps extends RadixCheckboxProps {
  wrapped?: boolean;
  error?: boolean;
  checkboxId: string;
  CheckboxIcon?: React.FunctionComponent;
  children: NonNullable<React.ReactNode>;
}

const getCheckboxStyles = (
  wrapped: boolean
): {
  backgroundColor: SystemProp<keyof Theme["colors"], Theme>;
  padding: SystemProp<keyof Theme["space"], Theme>;
} => {
  if (wrapped) {
    return {
      backgroundColor: "colorBackgroundWeak",
      padding: "space40",
    };
  }
  return {
    backgroundColor: "colorBackground",
    padding: "space0",
  };
};

const StyledCheckboxRoot = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: ${theme.space.space30};
  padding: 4px 0 0;

  &:focus {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 2px ${
      theme.colors.colorBackground
    }, 0 0 0 4px ${theme.colors.colorBackgroundPrimary};
    outline: none;
  },

  &[data-state=unchecked] {
    background-color: ${theme.colors.colorBackground};
    border: 1px solid ${(props: { error: boolean }) =>
      props.error
        ? theme.colors.colorBackgroundDestructive
        : theme.colors.colorBorder};

    &:hover {
      background-color: ${theme.colors.colorBackgroundStrong};
      border: 1px solid ${theme.colors.colorBorder};
    },
  },
  
  &[data-state=checked], &[data-state=indeterminate] {
    background-color: ${theme.colors.colorBackgroundPrimary};
    border: 1px solid ${theme.colors.colorBackgroundPrimary};

    &[data-disabled=true] {
      background-color: ${theme.colors.colorBackgroundStrong};
      border: 1px solid ${theme.colors.colorBackgroundStrong};
    }

    &:hover {
      background-color: ${theme.colors.colorBackgroundPrimaryStrong};
      border: 1px solid ${theme.colors.colorBackgroundPrimaryStrong};
    },
  },
  
  &[data-disabled=true] {
    background-color: ${theme.colors.colorBackground};
    border: 1px solid ${theme.colors.colorBackgroundStrong};  
  
    &:hover {
      background-color: ${theme.colors.colorBackgroundStrong};
      border: 1px solid ${theme.colors.colorBackgroundStrong};
    },
  },
`;

export const CheckboxRoot = React.forwardRef<
  HTMLButtonElement,
  CheckboxRootProps
>(
  (
    { wrapped = false, error = false, checkboxId, checked, children, ...props },
    ref
  ) => {
    return (
      <Box.div
        alignItems="center"
        borderRadius="borderRadius20"
        data-testid="checkbox-container"
        display="flex"
        {...getCheckboxStyles(wrapped)}
      >
        <StyledCheckboxRoot
          as={RadixRoot}
          checked={checked}
          data-testid="checkbox"
          error={error}
          id={checkboxId}
          ref={ref}
          {...props}
        >
          {checked === "indeterminate" ? (
            <IndeterminateIndicator />
          ) : (
            <CheckIndicator />
          )}
        </StyledCheckboxRoot>
        <Text.label
          color={error ? "colorTextError" : "colorTextStronger"}
          data-testid="checkbox-label"
          fontSize="fontSize20"
          htmlFor={checkboxId}
          marginBottom="space10"
        >
          {children}
        </Text.label>
      </Box.div>
    );
  }
);

export type CheckedState = boolean | "indeterminate";

CheckboxRoot.displayName = "Checkbox";
