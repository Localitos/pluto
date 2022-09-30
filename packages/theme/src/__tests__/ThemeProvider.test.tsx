import * as React from "react";
import { render, screen } from "@testing-library/react";
import map from "lodash/map";
import { Theme } from "..";

const ThemeConsumerExampleComponent = (): React.ReactElement => {
  return (
    <Theme.Consumer>
      {({ theme }) => (
        <p>
          {map(theme.breakpoints, (breakpoint: string) => `${breakpoint},`)}
        </p>
      )}
    </Theme.Consumer>
  );
};

const ThemeConsumerExampleTextColor = (): React.ReactElement => {
  return (
    <Theme.Consumer>
      {({ theme }) => <p>Color: {theme.colors.colorTextLink}</p>}
    </Theme.Consumer>
  );
};

describe("Theme.Provider", () => {
  it("should render the default link text color", (): void => {
    render(
      <Theme.Provider>
        <ThemeConsumerExampleTextColor />
      </Theme.Provider>
    );
    const renderedTheme = screen.getByText("Color: #102EE9");
    expect(renderedTheme).toBeInTheDocument();
  });

  it("should rely on the default breakpoints set on the theme object", () => {
    render(
      <Theme.Provider theme="default">
        <ThemeConsumerExampleComponent />
      </Theme.Provider>
    );
    const renderedTheme = screen.getByText("25rem,64rem,77rem,");
    expect(renderedTheme).toBeInTheDocument();
  });

  it("should set custom breakpoints when provided", () => {
    const customBreakpoints = ["30rem", "20rem", "90rem"];

    render(
      <Theme.Provider customBreakpoints={customBreakpoints}>
        <ThemeConsumerExampleComponent />
      </Theme.Provider>
    );
    const renderedTheme = screen.getByText("30rem,20rem,90rem,");
    expect(renderedTheme).toBeInTheDocument();
  });
});
