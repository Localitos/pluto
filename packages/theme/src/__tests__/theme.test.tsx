import { theme } from "../theme/default";

describe("Theme", () => {
  it("matches the default theme", () => {
    const defaultTheme = theme;
    expect(defaultTheme).toMatchSnapshot();
  });
});
