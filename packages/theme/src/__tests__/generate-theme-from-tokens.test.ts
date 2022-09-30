import { generateThemeFromTokens } from "../utils/generate-theme-from-tokens";

describe("generateThemeFromTokens", () => {
  it("should generate a theme in the desired shape based on design tokens provided", () => {
    expect(
      generateThemeFromTokens({
        borderWidths: { borderWidth0: "10px" },
        radii: { borderRadius10: "20px" },
        fonts: { fontFamilyModerat: "arial" },
        fontSizes: { fontSize30: "300px" },
        fontWeights: { fontWeightBold: "800" },
        lineHeights: { lineHeight30: "20px" },
        boxShadows: { shadow: "grey" },
        colors: { colorText: "black" },
        spacings: { space10: "28px" },
        zIndices: { zIndex0: "-20" },
      })
    ).toMatchSnapshot();
  });
});
