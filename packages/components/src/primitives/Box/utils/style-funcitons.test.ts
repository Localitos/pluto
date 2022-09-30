import isFunction from "lodash/isFunction";
import { getPseudoStyles } from "./style-functions";

describe("Box StyleFunctions", () => {
  // When rendered the theme object is injected onto Box props via emotions theming context.
  // Which is where the css and variant style functions look for their values.
  const mockTheme = {
    theme: {
      ...TestTheme,
    },
  };

  describe("getPseudoStyles", () => {
    it("should return resolved object styles when called with pseudo selector props set", () => {
      const cssFunc = getPseudoStyles({
        _hover: { padding: "space10", textDecoration: "underline" },
      });
      if (isFunction(cssFunc)) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(cssFunc(mockTheme)).toEqual({
          "&:hover": {
            padding: "0.125rem",
            textDecoration: "underline",
          },
        });
      }
    });

    it("should return an empty object styles when called with pseudo selector props set that do not match our expected pseudo selectors", () => {
      // @ts-expect-error testing invalid pseudo selectors
      const cssFunc = getPseudoStyles({ _hovered: { padding: "space10" } });
      if (isFunction(cssFunc)) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(cssFunc(mockTheme)).toEqual({});
      }
    });

    it("should return an empty object styles when called without pseudo selector props set", () => {
      expect(getPseudoStyles({})).toEqual({});
    });
  });
});
