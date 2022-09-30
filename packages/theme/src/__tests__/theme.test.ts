import keys from "lodash/keys";
import { DefaultTheme } from "../";

describe("Default theme", () => {
  it("should match the snapshot", () => {
    expect(keys(DefaultTheme).sort()).toMatchSnapshot();
  });
});
