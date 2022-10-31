import React from "react";
import { useUID } from "react-uid";
import { Box } from "../../primitives/Box";
import { Input } from "../Input";
import type { InputProps } from "../Input";
import { Label } from "../Label";

type SearchProps = Omit<InputProps, "type">;

/** The Search component is a text field that allows a user to enter search queries. */
const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ ...props }, ref) => {
    const seachInputId = useUID();
    return (
      <>
        {/* Todo: Replace with VisuallyHidden component once its built. */}
        <Box.span
          border="none"
          h="1px"
          margin="spaceNegative10"
          overflow="hidden"
          padding="space0"
          position="absolute"
          // Looks like xStyled didn't include a clip css property.
          style={{
            clip: "rect(0 0 0 0)",
          }}
          textTransform="none"
          w="1px"
          whiteSpace="nowrap"
        >
          <Label htmlFor={seachInputId}>Search</Label>
        </Box.span>
        <Input
          id={seachInputId}
          leadingIcon="MagnifyingGlassIcon"
          ref={ref}
          type="search"
          {...props}
        />
      </>
    );
  }
);

Search.displayName = "Search";

export { Search };
