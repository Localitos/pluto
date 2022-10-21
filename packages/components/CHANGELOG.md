# @localyze-pluto/components

## 2.5.0

### Minor Changes

- [#93](https://github.com/Localitos/pluto/pull/93) [`bda117c`](https://github.com/Localitos/pluto/commit/bda117c0a327aaae7c6bfe30e754e479a2e53a68) Thanks [@nyan07](https://github.com/nyan07)! - Add avatar

- [#119](https://github.com/Localitos/pluto/pull/119) [`9d7b07e`](https://github.com/Localitos/pluto/commit/9d7b07ee427d23ec05d4c16dcc5c30cc73276147) Thanks [@apvale](https://github.com/apvale)! - [RichText] Added the RichText component. It includes an externalAnchors prop that if true, add external target and rel attributes to anchor tags.

### Patch Changes

- Updated dependencies [[`bda117c`](https://github.com/Localitos/pluto/commit/bda117c0a327aaae7c6bfe30e754e479a2e53a68)]:
  - @localyze-pluto/theme@1.0.9

## 2.4.0

### Minor Changes

- [#118](https://github.com/Localitos/pluto/pull/118) [`6b314a9`](https://github.com/Localitos/pluto/commit/6b314a98014a64d6f0ef4b9c49acc0768ebc460d) Thanks [@nyan07](https://github.com/nyan07)! - Add anchor component

### Patch Changes

- Updated dependencies [[`6b314a9`](https://github.com/Localitos/pluto/commit/6b314a98014a64d6f0ef4b9c49acc0768ebc460d)]:
  - @localyze-pluto/theme@1.0.8

## 2.3.3

### Patch Changes

- [#114](https://github.com/Localitos/pluto/pull/114) [`d71ec2a`](https://github.com/Localitos/pluto/commit/d71ec2a758e901ce5c13b6e5ea8b756fd9c6b06f) Thanks [@apvale](https://github.com/apvale)! - Updates react peer dependencies version to fix an issue on repos that use react 18

## 2.3.2

### Patch Changes

- [#112](https://github.com/Localitos/pluto/pull/112) [`06a9780`](https://github.com/Localitos/pluto/commit/06a97801262a94f077cf1b936efc93c667a154ac) Thanks [@richbachman](https://github.com/richbachman)! - Moved package dependencies to peer and dev dependencies.

- Updated dependencies [[`06a9780`](https://github.com/Localitos/pluto/commit/06a97801262a94f077cf1b936efc93c667a154ac)]:
  - @localyze-pluto/theme@1.0.6

## 2.3.1

### Patch Changes

- [#110](https://github.com/Localitos/pluto/pull/110) [`62dc0ba`](https://github.com/Localitos/pluto/commit/62dc0ba72a5e94d20c808c4156f81bd43b62b420) Thanks [@richbachman](https://github.com/richbachman)! - Changes the React and React-Dom deps to use 17 instead of 18. This opens the door for Pluto to be used in a wider variety of applications.

- Updated dependencies [[`62dc0ba`](https://github.com/Localitos/pluto/commit/62dc0ba72a5e94d20c808c4156f81bd43b62b420)]:
  - @localyze-pluto/theme@1.0.5

## 2.3.0

### Minor Changes

- [#97](https://github.com/Localitos/pluto/pull/97) [`77fe23e`](https://github.com/Localitos/pluto/commit/77fe23efc4ac1ed54f7786916f2a6f5eb8ef6ed6) Thanks [@richbachman](https://github.com/richbachman)! - - [Table]: Added un-styled table component and the composable parts.

  - [Button]: Fixes the `children` prop to actually not include `undefined`.

- [#100](https://github.com/Localitos/pluto/pull/100) [`09a2cca`](https://github.com/Localitos/pluto/commit/09a2cca6ffe00a7aaf8c2c0cddec080d9ee4de12) Thanks [@apvale](https://github.com/apvale)! - Add leading and trailing icons to the Primary button

### Patch Changes

- [#100](https://github.com/Localitos/pluto/pull/100) [`09a2cca`](https://github.com/Localitos/pluto/commit/09a2cca6ffe00a7aaf8c2c0cddec080d9ee4de12) Thanks [@apvale](https://github.com/apvale)! - Export Callout component

## 2.2.0

### Minor Changes

- [#96](https://github.com/Localitos/pluto/pull/96) [`29778b8`](https://github.com/Localitos/pluto/commit/29778b8e66694fcb0672c7120b558d59fc15a155) Thanks [@nyan07](https://github.com/nyan07)! - [Callout] Added the Callout component with four variants: information, warning, error, and success.

### Patch Changes

- Updated dependencies [[`29778b8`](https://github.com/Localitos/pluto/commit/29778b8e66694fcb0672c7120b558d59fc15a155)]:
  - @localyze-pluto/theme@1.0.4

## 2.1.0

### Minor Changes

- [#94](https://github.com/Localitos/pluto/pull/94) [`adea19a`](https://github.com/Localitos/pluto/commit/adea19a8140c45bbcf9ba8b2b47aa9e935c9e4ad) Thanks [@richbachman](https://github.com/richbachman)! - [Icon]: Adds the Icon component, which can be used to render any icon from the Hero Icons library.

- [#81](https://github.com/Localitos/pluto/pull/81) [`69f68ec`](https://github.com/Localitos/pluto/commit/69f68ec12af85552671495768ecbb06613d731af) Thanks [@richbachman](https://github.com/richbachman)! - [Paragraph]: Added the Paragraph component. It includes three sizes: small, medium (default), and large. Paragraph also includes a default bottom margin, which can be overridden to have no bottom margin.

- [#92](https://github.com/Localitos/pluto/pull/92) [`9d9eee6`](https://github.com/Localitos/pluto/commit/9d9eee659cb41185d51dd975b763fb1c11649485) Thanks [@richbachman](https://github.com/richbachman)! - [Button]: Added the Button component with one variant, primary. Button also has two sizes (small and large).

- [#82](https://github.com/Localitos/pluto/pull/82) [`bb61ec6`](https://github.com/Localitos/pluto/commit/bb61ec6fe29986908e55f0ff3623b798bf1e3f63) Thanks [@richbachman](https://github.com/richbachman)! - [Heading]: Added the Heading component. It can be multiple sizes, and render as any valid heading element. Heading also includes a default bottom margin, which can be overridden to have no bottom margin.

### Patch Changes

- Updated dependencies [[`885ee97`](https://github.com/Localitos/pluto/commit/885ee97b93c59e09a17da6ecf1982bbe1f168c9b), [`e8c93a7`](https://github.com/Localitos/pluto/commit/e8c93a771d562b11b5e3996b2bebf371ea36cfbe), [`6d599a2`](https://github.com/Localitos/pluto/commit/6d599a214f70dab69ec93cee7591cc107672e2cb)]:
  - @localyze-pluto/theme@1.0.3

## 2.0.1

### Patch Changes

- [#79](https://github.com/Localitos/pluto/pull/79) [`00756eb`](https://github.com/Localitos/pluto/commit/00756eb8624f331701e61ca9904e3b9cf55b65ea) Thanks [@richbachman](https://github.com/richbachman)! - Added correct peerDependencies

- Updated dependencies [[`00756eb`](https://github.com/Localitos/pluto/commit/00756eb8624f331701e61ca9904e3b9cf55b65ea)]:
  - @localyze-pluto/theme@1.0.2

## 2.0.0

### Major Changes

- [#63](https://github.com/Localitos/pluto/pull/63) [`ea6081c`](https://github.com/Localitos/pluto/commit/ea6081ca0520fffcabfd99a38abd0d1b83399ec3) Thanks [@richbachman](https://github.com/richbachman)! - BREAKING CHANGE

  [Box]: Box is now a utility component based on the `x` component from xStyled. It comes with all available style props.

  - The `css` has been removed. Any styles contained within the `css` prop will need to be replaced with style props.

  [Text]: Text is now a utility component based on the `x` component from xStyled, but with only typography and display style props

  - The `css` has been removed. Any styles contained within the `css` prop will need to be replaced with style props.

### Patch Changes

- Updated dependencies [[`01d4fc5`](https://github.com/Localitos/pluto/commit/01d4fc50b5e05b536a8cb8bb7a62e16d646ef037)]:
  - @localyze-pluto/theme@1.0.0

## 1.0.0

### Major Changes

- [#25](https://github.com/Localitos/pluto/pull/25) [`e38e56d`](https://github.com/Localitos/pluto/commit/e38e56d0eb740d9b7cbc8c9deb9e3402b15bd0c5) Thanks [@richbachman](https://github.com/richbachman)! - [Box]: The initial release of the Box component. Box is a primitive component that can be used to create all block level styles in Pluto.

### Patch Changes

- [#28](https://github.com/Localitos/pluto/pull/28) [`750bf3f`](https://github.com/Localitos/pluto/commit/750bf3fe827e49e51432b2a9a6165eb867bbbcf5) Thanks [@richbachman](https://github.com/richbachman)! - [Text]: The initial release of the Text component. A primitive component that can be used to create all text styles in Pluto.

  [Box]: Changed the as prop to be typed as `keyof JSX.IntrinsicElements`

- Updated dependencies [[`eee65c9`](https://github.com/Localitos/pluto/commit/eee65c9d5430cadd619c4587af1f78575e9b4387)]:
  - @localyze-pluto/theme@0.0.2
