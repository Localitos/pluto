import React from "react";
import { Box } from "../../primitives/Box";

export const PaginationButton = ({
  children,
  isCurrentPage,
  onClick,
  page,
}: {
  children: React.ReactNode;
  isCurrentPage: boolean;
  onClick: () => void;
  page: number;
}): React.ReactElement => {
  return (
    <Box.li>
      <Box.button
        alignItems="center"
        appearance="none"
        aria-current={isCurrentPage}
        aria-label={
          isCurrentPage ? `Current Page, Page ${page}` : `Goto Page ${page}`
        }
        backgroundColor={{
          _: isCurrentPage ? "colorBackgroundInfo" : "transparent",
          hover: "colorBackgroundInfo",
          focus: "colorBackgroundInfo",
        }}
        borderColor={{
          _: isCurrentPage ? "colorBorderPrimary" : "colorBorder",
          hover: isCurrentPage ? "colorBorder" : "colorBorderPrimary",
        }}
        borderRadius="borderRadius20"
        borderStyle="borderStyleSolid"
        borderWidth={{
          _: isCurrentPage ? "borderWidth10" : "borderWidth0",
        }}
        color={{
          _: isCurrentPage ? "colorTextLink" : "colorTextStronger",
          hover: isCurrentPage ? "colorTextStronger" : "colorTextLink",
        }}
        cursor={{
          _: "default",
          hover: "pointer",
          disabled: "not-allowed",
        }}
        display="inline-flex"
        fontFamily="fontFamilyNotoSans"
        fontSize="fontSize20"
        fontWeight="fontWeightMedium"
        justifyContent="center"
        onClick={onClick}
        outlineColor="colorBorderPrimary"
        outlineOffset={{ focus: "borderWidth20" }}
        outlineStyle={{ focus: "borderStyleSolid" }}
        outlineWidth={{ active: "borderWidth0", focus: "borderWidth20" }}
        paddingBottom="space30"
        paddingLeft="space30"
        paddingRight="space30"
        paddingTop="space30"
        textDecoration={{ _: "none", hover: "none" }}
        w="36px"
      >
        {children}
      </Box.button>
    </Box.li>
  );
};
