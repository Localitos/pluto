import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Theme } from "..";

const ThemeConsumerExampleComponent = (): React.ReactElement => {
  return (
    <Theme.Consumer>
      {({ theme }) => <p>{theme.colors.colorText}</p>}
    </Theme.Consumer>
  );
};

describe("Theme.Consumer", () => {
  it("should be able to access the theme object", () => {
    render(
      <Theme.Provider theme="default">
        <ThemeConsumerExampleComponent />
      </Theme.Provider>
    );
    const renderedTheme = screen.getByText("#64748B");
    expect(renderedTheme).toBeInTheDocument();
  });
});
