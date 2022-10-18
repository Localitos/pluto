# @localyze-pluto/theme

## 1.0.4

### Patch Changes

- [#96](https://github.com/Localitos/pluto/pull/96) [`29778b8`](https://github.com/Localitos/pluto/commit/29778b8e66694fcb0672c7120b558d59fc15a155) Thanks [@nyan07](https://github.com/nyan07)! - Added the colorTextInfo to the theme.

## 1.0.3

### Patch Changes

- [#94](https://github.com/Localitos/pluto/pull/94) [`885ee97`](https://github.com/Localitos/pluto/commit/885ee97b93c59e09a17da6ecf1982bbe1f168c9b) Thanks [@richbachman](https://github.com/richbachman)! - Added icon sizes to the theme, and removes the default sizes.

- [#82](https://github.com/Localitos/pluto/pull/82) [`e8c93a7`](https://github.com/Localitos/pluto/commit/e8c93a771d562b11b5e3996b2bebf371ea36cfbe) Thanks [@richbachman](https://github.com/richbachman)! - This includes a few minor fontSize and lineHeight changes.

  fontSizes

  - Changed `fontSize80` to 48px
  - Added `fontSize90`

  lineHeights

  - Changed `lineHeight80` to 48px
  - Changed `lineHeight90` to 54px
  - Added `lineHeight100`

- [#92](https://github.com/Localitos/pluto/pull/92) [`6d599a2`](https://github.com/Localitos/pluto/commit/6d599a214f70dab69ec93cee7591cc107672e2cb) Thanks [@richbachman](https://github.com/richbachman)! - Added the `loading` custom state to the theme. This can be used to style `aria-busy` elements.

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
