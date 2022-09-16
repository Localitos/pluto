import { getVariants } from "../get-variants";

describe("Utils", () => {
  describe("getVariants", () => {
    it("should return an object of radii variants", () => {
      expect(
        getVariants("radii", (tokenValue) => ({
          borderRadius: tokenValue,
        }))
      ).toStrictEqual({
        borderRadius10: { borderRadius: "$borderRadius10" },
        borderRadius20: { borderRadius: "$borderRadius20" },
        borderRadius30: { borderRadius: "$borderRadius30" },
        borderRadius40: { borderRadius: "$borderRadius40" },
        borderRadius50: { borderRadius: "$borderRadius50" },
        borderRadiusCircle: { borderRadius: "$borderRadiusCircle" },
        borderRadiusPill: { borderRadius: "$borderRadiusPill" },
      });
    });
  });
});
