# @localyze-pluto/theme

## 1.0.2

### Patch Changes

- [#79](https://github.com/Localitos/pluto/pull/79) [`00756eb`](https://github.com/Localitos/pluto/commit/00756eb8624f331701e61ca9904e3b9cf55b65ea) Thanks [@richbachman](https://github.com/richbachman)! - Exporting the correct types and added correct peerDependencies.

## 1.0.1

### Patch Changes

- [#77](https://github.com/Localitos/pluto/pull/77) [`aeb5073`](https://github.com/Localitos/pluto/commit/aeb50730641de651bb30de3df64a08a854b61495) Thanks [@richbachman](https://github.com/richbachman)! - Export `createGlobalStyle` from xStyled so it can be used in other applications.

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
