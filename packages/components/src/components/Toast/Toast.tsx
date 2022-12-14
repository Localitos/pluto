import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { Box } from "../../primitives/Box";
import { Text } from "../../primitives/Text";
import { Icon } from "../Icon";
import type { ToastVariants } from "./types";

export interface ToastCtaProps {
  /** The content of the action. */
  content: React.ReactNode;
  /** The accessible alt text used if an action is used in the toast. */
  altText: string;
}

export interface ToastProps
  extends Omit<React.ComponentProps<typeof ToastPrimitive.Root>, "asChild"> {
  /** The text content of the toast. */
  children: NonNullable<React.ReactNode>;
  /** The type and style of the toast. */
  variant: ToastVariants;
  /** An action that users can take, but also may be safely ignored. */
  cta?: ToastCtaProps;
}

/** A succinct message that is displayed temporarily. */
const Toast = React.forwardRef<HTMLLIElement, ToastProps>(
  ({ cta, children, variant, ...props }, ref) => {
    return (
      <Box.li
        as={ToastPrimitive.Root}
        backgroundColor={
          variant === "error"
            ? "colorBackgroundError"
            : "colorBackgroundSuccess"
        }
        borderColor={
          variant === "error" ? "colorBorderError" : "colorBorderSuccess"
        }
        borderRadius="borderRadius20"
        borderStyle="borderStyleSolid"
        borderWidth="borderWidth10"
        boxShadow="shadow"
        display="grid"
        gap="space40"
        gridTemplateColumns="20px 1fr 20px"
        padding="space40"
        ref={ref}
        {...props}
      >
        <Icon
          color={variant === "error" ? "colorIconError" : "colorIconSuccess"}
          decorative
          icon={variant === "error" ? "XCircleIcon" : "CheckCircleIcon"}
          size="sizeIcon30"
        />

        <Box.span>
          <ToastPrimitive.Description asChild>
            <Text.span
              color={
                variant === "error" ? "colorTextError" : "colorTextSuccess"
              }
              fontFamily="fontFamilyModerat"
              fontSize="fontSize30"
              fontWeight="fontWeightMedium"
              lineHeight="lineHeight30"
            >
              {children}
            </Text.span>
          </ToastPrimitive.Description>
          {cta?.content && cta.altText && (
            <>
              {" "}
              <ToastPrimitive.Action altText={cta.altText} asChild>
                {cta.content}
              </ToastPrimitive.Action>
            </>
          )}
        </Box.span>

        <Box.button as={ToastPrimitive.Close} asChild cursor="pointer">
          <Icon
            color="colorIconWeak"
            decorative={false}
            icon="XMarkIcon"
            size="sizeIcon30"
            title="Close toast"
          />
        </Box.button>
      </Box.li>
    );
  }
);

Toast.displayName = "Toast";

export { Toast };
