import React from "react"
import {Dialog} from "@ariakit/react/dialog"
import type {DialogProps} from "@ariakit/react"
import {styled, theme} from "@localyze-pluto/theme"
import type {SystemProp, Theme} from "@xstyled/styled-components"
import {Box, BoxProps} from "../../primitives/Box"

export interface DrawerProps extends DialogProps {
  /** The contents of the drawer. */
  children: NonNullable<React.ReactNode>
  padding?: SystemProp<keyof Theme["space"], Theme>
}

const StyledBackdrop = styled(Box.div)<BoxProps>`
  background-color: rgba(39, 49, 63, 0.5);
  backdrop-filter: blur(3px);
  opacity: 0;
  transition:
    opacity 0.5s,
    backdrop-filter 0.5s;

  &[data-enter] {
    backdrop-filter: blur(3px);
    opacity: 1;
  }
`

const StyledDrawer = styled(Box.div)<{
  padding?: SystemProp<keyof Theme["space"], Theme>
}>`
  background-color: ${theme.colors.colorBackground};
  box-shadow: ${theme.shadows.shadowStrong};
  display: flex;
  flex-direction: column;
  max-width: 34.375rem;
  position: fixed;
  right: -100%;
  top: 0;
  bottom: 0;
  transition: right 0.4s;
  padding: ${({padding}) => padding ?? "space0"};
  z-index: ${theme.zIndices.zIndex30};

  &[data-enter] {
    right: 0;
  }
`

/** A Drawer is a page overlay that displays information and blocks interaction with the page until an action is taken or the Drawer is dismissed. */
const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({children, initialFocus, padding, ...props}, ref) => {
    return (
      <Dialog
        autoFocusOnShow={initialFocus ? true : false}
        backdrop={() => <StyledBackdrop />}
        initialFocus={initialFocus}
        ref={ref}
        render={() => <StyledDrawer padding={padding}>{children}</StyledDrawer>}
        {...props}
      />
    )
  },
)

Drawer.displayName = "Drawer"

export {Drawer}
