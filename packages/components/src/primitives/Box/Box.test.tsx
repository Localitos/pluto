/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable sonarjs/no-duplicate-string */
import { render, screen } from "@testing-library/react";
import React from "react";
import { Theme } from "@localyze-pluto/theme";
import { Box } from "./Box";

const childString = "This is a div";

describe("<Box />", () => {
  describe("Backgrounds", () => {
    it("should render single values", (): void => {
      render(
        <Box backgroundColor="colorBackgroundPrimary" data-testid="box">
          {childString}
        </Box>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule(
        "background-color",
        "colorBackgroundPrimary"
      );
    });

    it("should render responsive values", () => {
      render(
        <Theme.Provider>
          <Box
            backgroundColor={["colorBackground", "colorBackgroundPrimary"]}
            data-testid="box"
          >
            {childString}
          </Box>
        </Theme.Provider>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("background-color", "#FFFFFF");
      expect(renderedBox).toHaveStyleRule("background-color", "#102EE9", {
        media: "screen and (min-width:25rem)",
      });
    });
  });

  describe("Color mappings", () => {
    it("should map single color values", (): void => {
      render(
        <Box
          backgroundColor="colorBackgroundPrimary"
          borderBottomColor="colorBorder"
          borderColor="colorBorder"
          borderLeftColor="colorBorder"
          borderRightColor="colorBorder"
          borderTopColor="colorBorder"
          color="colorText"
          data-testid="box"
        >
          {childString}
        </Box>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule(
        "background-color",
        "colorBackgroundPrimary"
      );
      expect(renderedBox).toHaveStyleRule("border-color", "colorBorder");
      expect(renderedBox).toHaveStyleRule("border-bottom-color", "colorBorder");
      expect(renderedBox).toHaveStyleRule("border-left-color", "colorBorder");
      expect(renderedBox).toHaveStyleRule("border-right-color", "colorBorder");
      expect(renderedBox).toHaveStyleRule("border-top-color", "colorBorder");
      expect(renderedBox).toHaveStyleRule("color", "colorText");
    });

    it("should map responsive color values", () => {
      render(
        <Theme.Provider>
          <Box
            backgroundColor={[
              "colorBackgroundPrimaryStrong",
              "colorBackgroundPrimary",
            ]}
            borderColor={["colorBorder", "colorBorderError"]}
            color={["colorText", "colorTextInverse"]}
            data-testid="box"
          >
            {childString}
          </Box>
        </Theme.Provider>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("background-color", "#0B1F9C");
      expect(renderedBox).toHaveStyleRule("background-color", "#102EE9", {
        media: "screen and (min-width:25rem)",
      });
      expect(renderedBox).toHaveStyleRule("border-color", "#64748B");
      expect(renderedBox).toHaveStyleRule("border-color", "#EF4444", {
        media: "screen and (min-width:25rem)",
      });
      expect(renderedBox).toHaveStyleRule("color", "#64748B");
      expect(renderedBox).toHaveStyleRule("color", "#FFFFFF", {
        media: "screen and (min-width:25rem)",
      });
    });

    it("should map pseudo selector color values", () => {
      render(
        <Box
          _hover={{
            backgroundColor: "colorBackground",
            borderColor: "colorBorderError",
            color: "colorTextInverse",
          }}
          data-testid="box"
        >
          {childString}
        </Box>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule(
        "background-color",
        "colorBackground",
        { target: ":hover" }
      );
      expect(renderedBox).toHaveStyleRule("border-color", "colorBorderError", {
        target: ":hover",
      });
      expect(renderedBox).toHaveStyleRule("color", "colorTextInverse", {
        target: ":hover",
      });
    });

    it("should map responsive pseudo selector color values", () => {
      render(
        <Theme.Provider>
          <Box
            _hover={{
              backgroundColor: ["colorBackground", "colorBackgroundBody"],
              borderColor: ["colorBorder", "colorBorderError"],
              color: ["colorTextError", "colorTextInverse"],
            }}
            data-testid="box"
          >
            {childString}
          </Box>
        </Theme.Provider>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("background-color", "#FFFFFF", {
        target: ":hover",
      });
      expect(renderedBox).toHaveStyleRule("background-color", "#F7F9FF", {
        target: ":hover",
        media: "screen and (min-width:25rem)",
      });
      expect(renderedBox).toHaveStyleRule("border-color", "#64748B", {
        target: ":hover",
      });
      expect(renderedBox).toHaveStyleRule("border-color", "#EF4444", {
        target: ":hover",
        media: "screen and (min-width:25rem)",
      });
      expect(renderedBox).toHaveStyleRule("color", "#B91C1C", {
        target: ":hover",
      });
      expect(renderedBox).toHaveStyleRule("color", "#FFFFFF", {
        target: ":hover",
        media: "screen and (min-width:25rem)",
      });
    });
  });

  describe("Borders", () => {
    it("should render single values", (): void => {
      render(
        <Box
          borderColor="colorBorderPrimary"
          borderRadius="borderRadius20"
          borderStyle="solid"
          borderWidth="borderWidth10"
          data-testid="box"
        >
          {childString}
        </Box>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("border-style", "solid");
      expect(renderedBox).toHaveStyleRule("border-color", "colorBorderPrimary");
      expect(renderedBox).toHaveStyleRule("border-width", "borderWidth10");
      expect(renderedBox).toHaveStyleRule("border-radius", "borderRadius20");
    });

    it("should render responsive values", () => {
      render(
        <Theme.Provider>
          <Box
            borderColor={["colorBorderPrimary", "colorBorder"]}
            borderRadius={["borderRadius0", "borderRadius10"]}
            borderStyle={["dashed", "dotted", "solid"]}
            borderWidth={["borderWidth10", "borderWidth20"]}
            data-testid="box"
          >
            {childString}
          </Box>
        </Theme.Provider>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("border-style", "dashed");
      expect(renderedBox).toHaveStyleRule("border-style", "dotted", {
        media: "screen and (min-width:25rem)",
      });
      expect(renderedBox).toHaveStyleRule("border-style", "solid", {
        media: "screen and (min-width:64rem)",
      });
      expect(renderedBox).toHaveStyleRule("border-color", "#102EE9");
      expect(renderedBox).toHaveStyleRule("border-color", "#64748B", {
        media: "screen and (min-width:25rem)",
      });
      expect(renderedBox).toHaveStyleRule("border-width", "1px");
      expect(renderedBox).toHaveStyleRule("border-width", "2px", {
        media: "screen and (min-width:25rem)",
      });
      expect(renderedBox).toHaveStyleRule("border-radius", "0");
      expect(renderedBox).toHaveStyleRule("border-radius", "4px", {
        media: "screen and (min-width:25rem)",
      });
    });
  });

  describe("Spaces", () => {
    it("should render single values", (): void => {
      render(
        <Box data-testid="box" margin="space20">
          {childString}
        </Box>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("margin", "space20");
    });

    it("should render responsive values", () => {
      render(
        <Theme.Provider>
          <Box data-testid="box" margin={["space20", "space30"]}>
            {childString}
          </Box>
        </Theme.Provider>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("margin", "0.25rem");
      expect(renderedBox).toHaveStyleRule("margin", "0.5rem", {
        media: "screen and (min-width:25rem)",
      });
    });

    it("should render separate single values", (): void => {
      render(
        <Box
          data-testid="box"
          marginBottom="space30"
          marginLeft="space30"
          marginRight="space20"
          marginTop="space20"
        >
          {childString}
        </Box>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("margin-top", "space20");
      expect(renderedBox).toHaveStyleRule("margin-right", "space20");
      expect(renderedBox).toHaveStyleRule("margin-bottom", "space30");
      expect(renderedBox).toHaveStyleRule("margin-left", "space30");
    });

    it("should render separate responsive values", (): void => {
      render(
        <Theme.Provider>
          <Box
            data-testid="box"
            marginBottom={["space30", "space40"]}
            marginLeft={["space30", "space40"]}
            marginRight={["space20", "space30"]}
            marginTop={["space20", "space30"]}
          >
            {childString}
          </Box>
        </Theme.Provider>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("margin-top", "0.25rem");
      expect(renderedBox).toHaveStyleRule("margin-top", "0.5rem", {
        media: "screen and (min-width:25rem)",
      });
      expect(renderedBox).toHaveStyleRule("margin-right", "0.25rem");
      expect(renderedBox).toHaveStyleRule("margin-right", "0.5rem", {
        media: "screen and (min-width:25rem)",
      });
      expect(renderedBox).toHaveStyleRule("margin-bottom", "0.5rem");
      expect(renderedBox).toHaveStyleRule("margin-bottom", "0.75rem", {
        media: "screen and (min-width:25rem)",
      });
      expect(renderedBox).toHaveStyleRule("margin-left", "0.5rem");
      expect(renderedBox).toHaveStyleRule("margin-left", "0.75rem", {
        media: "screen and (min-width:25rem)",
      });
    });
  });

  describe("Shadows", () => {
    it("should render single values", (): void => {
      render(
        <Box boxShadow="shadow" data-testid="box">
          {childString}
        </Box>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("box-shadow", "shadow");
    });

    it("should render responsive values", () => {
      render(
        <Theme.Provider>
          <Box boxShadow={["shadow", "shadowFocus"]} data-testid="box">
            {childString}
          </Box>
        </Theme.Provider>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule(
        "box-shadow",
        "0px 3px 24px rgba(15, 23, 42, 0.05)"
      );
      expect(renderedBox).toHaveStyleRule(
        "box-shadow",
        "0px 1px 2px rgba(0, 0, 0, 0.05),0px 0px 0px 2px #FFFFFF,0px 0px 0px 4px #102EE9",
        {
          media: "screen and (min-width:25rem)",
        }
      );
    });
  });

  describe("ZIndex", () => {
    it("should render single values", (): void => {
      render(
        <Box data-testid="box" zIndex="zIndex10">
          {childString}
        </Box>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("z-index", "zIndex10");
    });

    it("should render responsive values", () => {
      render(
        <Theme.Provider>
          <Box data-testid="box" zIndex={["zIndex10", "zIndex20"]}>
            {childString}
          </Box>
        </Theme.Provider>
      );
      const renderedBox = screen.getByTestId("box");
      expect(renderedBox).toHaveStyleRule("z-index", "10");
      expect(renderedBox).toHaveStyleRule("z-index", "20", {
        media: "screen and (min-width:25rem)",
      });
    });

    describe("Pseudo-class props", () => {
      it("should generate pseudo-class CSS", (): void => {
        render(
          <Box
            _active={{ padding: "space10" }}
            _after={{ padding: "space10" }}
            _before={{ padding: "space10" }}
            _checked={{ padding: "space10" }}
            _disabled={{ padding: "space10" }}
            _even={{ padding: "space10" }}
            _expanded={{ padding: "space10" }}
            _first={{ padding: "space10" }}
            _focus={{ padding: "space10" }}
            _focusVisible={{ padding: "space10" }}
            _focusWithin={{ padding: "space10" }}
            _grabbed={{ padding: "space10" }}
            _groupHover={{ padding: "space10" }}
            _hover={{ padding: "space10" }}
            _invalid={{ padding: "space10" }}
            _last={{ padding: "space10" }}
            _mixed={{ padding: "space10" }}
            _notFirst={{ padding: "space10" }}
            _notLast={{ padding: "space10" }}
            _odd={{ padding: "space10" }}
            _placeholder={{ padding: "space10" }}
            _pressed={{ padding: "space10" }}
            _readOnly={{ padding: "space10" }}
            _selected={{ padding: "space10" }}
            _visited={{ padding: "space10" }}
            data-testid="box"
          >
            PseudoBox
          </Box>
        );
        const renderedBox = screen.getByTestId("box");
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":hover",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":active",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":focus",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":visited",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":nth-of-type(even)",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":nth-of-type(odd)",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":disabled",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":checked",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":indeterminate",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: "[aria-selected=true]",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":invalid",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: "[aria-pressed=true]",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: "[readonly]",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":first-of-type",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":last-of-type",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: "[aria-expanded=true]",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: "[aria-grabbed=true]",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":not(:first-of-type)",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":not(:last-of-type)",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: "[role=group]:hover",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":before",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":after",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":focus-within",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: ":focus-visible",
        });
        expect(renderedBox).toHaveStyleRule("padding", "space10", {
          target: "::placeholder",
        });
      });
    });
  });
});
