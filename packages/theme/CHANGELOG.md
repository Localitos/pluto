# @localyze-pluto/theme

## 1.0.0

### Major Changes

- [#63](https://github.com/Localitos/pluto/pull/63) [`01d4fc5`](https://github.com/Localitos/pluto/commit/01d4fc50b5e05b536a8cb8bb7a62e16d646ef037) Thanks [@richbachman](https://github.com/richbachman)! - BREAKING CHANGE

  [Theme]: The underlying styling library has been changed from using StitchesJS to xStyled.

  - The `theme` now follows the xStyled theme format.
  - `globalStyles` has been replaced with `<GlobalStyles>`.
  - `ThemeProvider` and `Preflight` are now exported.
  - `ThemeProvider` must be used by teams in order for components to read the theme context.

## 0.0.2

### Patch Changes

- [#25](https://github.com/Localitos/pluto/pull/25) [`eee65c9`](https://github.com/Localitos/pluto/commit/eee65c9d5430cadd619c4587af1f78575e9b4387) Thanks [@richbachman](https://github.com/richbachman)! - Adjusted the package.json to use NPM published Pluto packages.
