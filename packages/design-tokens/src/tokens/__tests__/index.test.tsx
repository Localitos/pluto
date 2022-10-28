import styles from "../../../dist/js/variables";

describe("Design tokens", () => {
  it("should render js variables", () => {
    const jsTokens = styles;
    expect(jsTokens).toMatchSnapshot();
  });
});
