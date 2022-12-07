# @localyze-pluto/components

## 6.2.1

### Patch Changes

- [#296](https://github.com/Localitos/pluto/pull/296) [`6d40e99`](https://github.com/Localitos/pluto/commit/6d40e99de2cf2a6e3ea6cdf02e96d1e489f5bcd9) Thanks [@blumaa](https://github.com/blumaa)! - adjusted dropzone to exclude hetero file drops

## 6.2.0

### Minor Changes

- [#295](https://github.com/Localitos/pluto/pull/295) [`54b7b8d`](https://github.com/Localitos/pluto/commit/54b7b8d34a808f651f6bc58bacd56835648292ae) Thanks [@blumaa](https://github.com/blumaa)! - Refactor of dropzone to remove isDragReject

### Patch Changes

- [#275](https://github.com/Localitos/pluto/pull/275) [`5ca824a`](https://github.com/Localitos/pluto/commit/5ca824ae552f488cc0c6d92948b1ac1ea7c3aa98) Thanks [@richbachman](https://github.com/richbachman)! - [Heading]: adjusted the breakpoint story so it shows correctly in Chromatic.

## 6.1.0

### Minor Changes

- [#272](https://github.com/Localitos/pluto/pull/272) [`67c8bb2`](https://github.com/Localitos/pluto/commit/67c8bb2f6bd94099659eb3ee45be0501234bb3c4) Thanks [@blumaa](https://github.com/blumaa)! - fixed dropzone error handling when isDragActive

## 6.0.0

### Patch Changes

- [#273](https://github.com/Localitos/pluto/pull/273) [`c295e2c`](https://github.com/Localitos/pluto/commit/c295e2c4496db3afed922557b9e2cb7d6abbf046) Thanks [@richbachman](https://github.com/richbachman)! - Updated the border style values with the new value names.

- [#268](https://github.com/Localitos/pluto/pull/268) [`eede46c`](https://github.com/Localitos/pluto/commit/eede46c61c09e7674468bbb25f3e93f07d0d9d57) Thanks [@richbachman](https://github.com/richbachman)! - - [FileUploader]: Set the correct border style prop (borderSolid).
  - [Heading]: Removed the default browser top margin.
  - [InputBox]: Set the correct color prop (colorText).
  - [Label]: Set the correct color prop (colorTextStrongest).
  - [UnorderedList]: Added a color prop (colorTextStrongest | currentColor). Removed the default browser spacing. Added a marginBottom prop (space0 | space70).
  - [OrderedList]: Added a color prop (colorTextStrongest | currentColor). Removed the default browser spacing. Added a marginBottom prop (space0 | space70).
  - [Paragraph]: Set the correct color prop (colorTextStrongest), and removed the default browser top margin.
- Updated dependencies [[`0da44e2`](https://github.com/Localitos/pluto/commit/0da44e2ebd53607f478686095524c33113f462e2), [`10fa34a`](https://github.com/Localitos/pluto/commit/10fa34a7bd7604e4fe740f1dfd422d7949d6961d)]:
  - @localyze-pluto/theme@2.0.0

## 5.1.1

### Patch Changes

- [#256](https://github.com/Localitos/pluto/pull/256) [`9e40ea0`](https://github.com/Localitos/pluto/commit/9e40ea0be014c5d0116c6e5bab34c3dbc681f53d) Thanks [@sliminas](https://github.com/sliminas)! - [Dropzone]: Use `fileTypes` and `maxFileSize` props to generate the file size and type restriction
  text and according error messages.

## 5.1.0

### Minor Changes

- [#237](https://github.com/Localitos/pluto/pull/237) [`45faf14`](https://github.com/Localitos/pluto/commit/45faf14e9c944b490d57faa2441388bbe9ba4c59) Thanks [@richbachman](https://github.com/richbachman)! - [Drawer] Added the Drawer component, stories, and tests.

### Patch Changes

- [#255](https://github.com/Localitos/pluto/pull/255) [`d954fa4`](https://github.com/Localitos/pluto/commit/d954fa4d2c25a0378e92151eeb51f911650ccb14) Thanks [@richbachman](https://github.com/richbachman)! - [Modal]: Added `disableOverflow` prop to ModalBody so a modal can be used with content that is visible outside the modal body area, i.e. a dropdown.

## 5.0.2

### Patch Changes

- [#241](https://github.com/Localitos/pluto/pull/241) [`3cfd865`](https://github.com/Localitos/pluto/commit/3cfd865e4d4b8940a920309f2492668d3f108ec6) Thanks [@richbachman](https://github.com/richbachman)! - - [Modal]: Omit `noonce` from ModalProps to fix bug in compiled application.
  - [Tooltip]: Omit `noonce` from TooltipProps to fix bug in compiled application.

## 5.0.1

### Patch Changes

- [#239](https://github.com/Localitos/pluto/pull/239) [`11a1a91`](https://github.com/Localitos/pluto/commit/11a1a9123cfcd4cf27a6a7e60894b00748498856) Thanks [@richbachman](https://github.com/richbachman)! - [Dropzone]: Fix the component export to include Dropzone.

## 5.0.0

### Minor Changes

- [#205](https://github.com/Localitos/pluto/pull/205) [`8105f45`](https://github.com/Localitos/pluto/commit/8105f45531e62b7356c25cb0caf90610c1914115) Thanks [@blumaa](https://github.com/blumaa)! - added a dropzone for file upload and dashed border

### Patch Changes

- Updated dependencies [[`8105f45`](https://github.com/Localitos/pluto/commit/8105f45531e62b7356c25cb0caf90610c1914115)]:
  - @localyze-pluto/theme@1.4.0

## 4.2.2

### Patch Changes

- [#235](https://github.com/Localitos/pluto/pull/235) [`e722239`](https://github.com/Localitos/pluto/commit/e722239252a3f941e2eb3b99bba1744c8fad1574) Thanks [@alinurr1](https://github.com/alinurr1)! - Add br tag support to RichText

## 4.2.1

### Patch Changes

- [#234](https://github.com/Localitos/pluto/pull/234) [`6e60427`](https://github.com/Localitos/pluto/commit/6e60427644b68f75ab37cbe5f0cae63888cb7077) Thanks [@apvale](https://github.com/apvale)! - [FileUploader] Add colorText color to FileUploaderDescription

- [#216](https://github.com/Localitos/pluto/pull/216) [`7f438a2`](https://github.com/Localitos/pluto/commit/7f438a2cf2be67170fbd30470e28e27661eebc44) Thanks [@alinurr1](https://github.com/alinurr1)! - fix checkbox width with long labels

## 4.2.0

### Minor Changes

- [#221](https://github.com/Localitos/pluto/pull/221) [`4ef2a10`](https://github.com/Localitos/pluto/commit/4ef2a10687a65d378a0e6a86c26c2f556adbf799) Thanks [@richbachman](https://github.com/richbachman)! - [Tooltip]: Initial release of the tooltip component.

## 4.1.3

### Patch Changes

- [#230](https://github.com/Localitos/pluto/pull/230) [`1e64298`](https://github.com/Localitos/pluto/commit/1e6429869934ddc4f5e06a2643474a72f1e69d1d) Thanks [@padulafacundo](https://github.com/padulafacundo)! - Don't show file information on FileUploader if a file was updated but there is no `fileName`

## 4.1.2

### Patch Changes

- [#227](https://github.com/Localitos/pluto/pull/227) [`925b050`](https://github.com/Localitos/pluto/commit/925b0509278c56d6c9d4728da030f8e0ac7eda4f) Thanks [@nyan07](https://github.com/nyan07)! - Add target and rel as prop on the Button component

## 4.1.1

### Patch Changes

- [#225](https://github.com/Localitos/pluto/pull/225) [`87aa3c3`](https://github.com/Localitos/pluto/commit/87aa3c318c397d69ced2757c1315a3b4fda65737) Thanks [@nyan07](https://github.com/nyan07)! - Fix button height on FileUploader when label has more than one line

## 4.1.0

### Minor Changes

- [#207](https://github.com/Localitos/pluto/pull/207) [`49f9f6f`](https://github.com/Localitos/pluto/commit/49f9f6fc406948b7f1342b138a33e744923b1bf3) Thanks [@richbachman](https://github.com/richbachman)! - - [TextArea] Added the TextArea component, stories, and tests.

  - [Input] Fixed the disabled cursor style.

- [#219](https://github.com/Localitos/pluto/pull/219) [`f7e7237`](https://github.com/Localitos/pluto/commit/f7e7237cf5d90f9ce282b09e61da7cbf2f5f0612) Thanks [@apvale](https://github.com/apvale)! - [Button] Add a new "outline" variant for buttons

## 4.0.0

### Patch Changes

- Updated dependencies [[`08a4c1f`](https://github.com/Localitos/pluto/commit/08a4c1fcc28476b90a5299fe3278ae8caee6c27f)]:
  - @localyze-pluto/theme@1.3.0

## 3.8.1

### Patch Changes

- [#208](https://github.com/Localitos/pluto/pull/208) [`025fedf`](https://github.com/Localitos/pluto/commit/025fedf1f352fb2e6c66c6a7616db8ebc5396146) Thanks [@nyan07](https://github.com/nyan07)! - Calls onClick function when clicking on FileUploaderButton

- [#211](https://github.com/Localitos/pluto/pull/211) [`2dec7c3`](https://github.com/Localitos/pluto/commit/2dec7c369e7ba3a7dc14ef904a811a95a02d93e0) Thanks [@nyan07](https://github.com/nyan07)! - Renders lists and bold on RichText component

## 3.8.0

### Minor Changes

- [#186](https://github.com/Localitos/pluto/pull/186) [`ab753d7`](https://github.com/Localitos/pluto/commit/ab753d7a742c5063c36601eeba6b6fb8bfaed7e2) Thanks [@nyan07](https://github.com/nyan07)! - Add FileUploader component

- [#193](https://github.com/Localitos/pluto/pull/193) [`de30bd6`](https://github.com/Localitos/pluto/commit/de30bd69b89bcb475d947e3d1c4e859ed1cf9cec) Thanks [@richbachman](https://github.com/richbachman)! - [Modal]: Inital release of the modal component
  [Button]: Changed the as prop to `keyof JSX.IntrinsicElements` to support rendering the Button as another component.

### Patch Changes

- [#206](https://github.com/Localitos/pluto/pull/206) [`a35f84a`](https://github.com/Localitos/pluto/commit/a35f84a5b1de335ddeec2b5c5f6b2774afd14123) Thanks [@apvale](https://github.com/apvale)! - [Avatar]: Add xlarge size to Avatar and updated fontWeight of initials

- Updated dependencies [[`de30bd6`](https://github.com/Localitos/pluto/commit/de30bd69b89bcb475d947e3d1c4e859ed1cf9cec)]:
  - @localyze-pluto/theme@1.2.4

## 3.7.0

### Minor Changes

- [#191](https://github.com/Localitos/pluto/pull/191) [`ec597f6`](https://github.com/Localitos/pluto/commit/ec597f6e28797fea81c3106779392174d3ca7560) Thanks [@alinurr1](https://github.com/alinurr1)! - fixes 'error' attribute warning and remove default styling from checkbox wrapper

## 3.6.0

### Minor Changes

- [#184](https://github.com/Localitos/pluto/pull/184) [`768f73e`](https://github.com/Localitos/pluto/commit/768f73eeb586e580823847044d586caacd0de197) Thanks [@nyan07](https://github.com/nyan07)! - - Add Button ghost variant
  - Fix Button active and focus states

### Patch Changes

- [#188](https://github.com/Localitos/pluto/pull/188) [`4254072`](https://github.com/Localitos/pluto/commit/4254072a52d72630d090398c5ee8c1db51c14867) Thanks [@richbachman](https://github.com/richbachman)! - [InputBox]: Changed color of background and borders due to design feedback.

  - Background: `colorBackgroundWeakest` changed to `colorBackground`
  - Background hover: `colorBackgroundWeak` changed to `colorBackgroundWeakest`
  - Border: `colorBorder` changed to `colorBorderWeakest`

## 3.5.0

### Minor Changes

- [#157](https://github.com/Localitos/pluto/pull/157) [`4d0bba7`](https://github.com/Localitos/pluto/commit/4d0bba73442d15d4ec729be90afc5fb886c2c19a) Thanks [@apvale](https://github.com/apvale)! - Add ProgressBar component

### Patch Changes

- [#185](https://github.com/Localitos/pluto/pull/185) [`83c868f`](https://github.com/Localitos/pluto/commit/83c868ff4535578eee53b44b70efab4f5abfa3b8) Thanks [@richbachman](https://github.com/richbachman)! - [Badge]: Added a purple variant and related story.

- Updated dependencies [[`c23ef92`](https://github.com/Localitos/pluto/commit/c23ef929646f64d016b163307571b84986724d23)]:
  - @localyze-pluto/theme@1.2.3

## 3.4.0

### Minor Changes

- [#171](https://github.com/Localitos/pluto/pull/171) [`ec2b75c`](https://github.com/Localitos/pluto/commit/ec2b75c70da53e5b0a5079574fcd7ffe0286a794) Thanks [@nyan07](https://github.com/nyan07)! - Allow buttons to have full width

- [#170](https://github.com/Localitos/pluto/pull/170) [`0f5179f`](https://github.com/Localitos/pluto/commit/0f5179f5d56394d37f9da3426b78496c916b9cc5) Thanks [@nyan07](https://github.com/nyan07)! - Add Secondary Button variant

### Patch Changes

- [#173](https://github.com/Localitos/pluto/pull/173) [`f496585`](https://github.com/Localitos/pluto/commit/f49658596c769145ce5e1ed02abfa332369992f6) Thanks [@richbachman](https://github.com/richbachman)! - [Avatar] Add `getAvatarColor` function that generates a random background color. Styles of the default Avatar have also changed.

- Updated dependencies [[`15bc069`](https://github.com/Localitos/pluto/commit/15bc0694d84d5eb6faf8fd25e9af2edd1f229793)]:
  - @localyze-pluto/theme@1.2.2

## 3.3.1

### Patch Changes

- [#168](https://github.com/Localitos/pluto/pull/168) [`751c11f`](https://github.com/Localitos/pluto/commit/751c11fa40679513ad05cafc1c8c8984ad056e02) Thanks [@richbachman](https://github.com/richbachman)! - [Badge]: Added a specific line-height to Badge so it won't inherit the line-height from its parent container.

## 3.3.0

### Minor Changes

- [#165](https://github.com/Localitos/pluto/pull/165) [`a50599d`](https://github.com/Localitos/pluto/commit/a50599d915ea9966394466712b01889d1a6ce4b6) Thanks [@richbachman](https://github.com/richbachman)! - [Search]: Added the Search component, which is an Input with the type set to `search`. This also comes with the accessible hidden label.

### Patch Changes

- [#159](https://github.com/Localitos/pluto/pull/159) [`e9992a5`](https://github.com/Localitos/pluto/commit/e9992a5fdc6125eb9dd4516bd9f7afdddff4445f) Thanks [@richbachman](https://github.com/richbachman)! - [Input]: Adds the `leadingIcon` and `trailingIcon` props to Input. These will render an icon on either the left or right side of the Input.

## 3.2.0

### Minor Changes

- [#155](https://github.com/Localitos/pluto/pull/155) [`27acdac`](https://github.com/Localitos/pluto/commit/27acdac9a0c5e9ab588031c112df00ad8debaeca) Thanks [@nyan07](https://github.com/nyan07)! - Add text variant to Button component

### Patch Changes

- [#161](https://github.com/Localitos/pluto/pull/161) [`205716b`](https://github.com/Localitos/pluto/commit/205716bd14e3a1afb31ed7521a1a9ef88255b01c) Thanks [@nyan07](https://github.com/nyan07)! - Allow type datetime-local on Input component

## 3.1.0

### Minor Changes

- [#151](https://github.com/Localitos/pluto/pull/151) [`8938fd8`](https://github.com/Localitos/pluto/commit/8938fd83e37d724c08b236312f59c274742b964c) Thanks [@richbachman](https://github.com/richbachman)! - [HelpText]: Initial release of the HelpText component.
  [Input]: Initial release of the Input component.
  [InputBox]: Initial release of the InputBox component. This will be used to wrap form elements.
  [Label]: Initial release of the Label component.

- [#127](https://github.com/Localitos/pluto/pull/127) [`49e10b7`](https://github.com/Localitos/pluto/commit/49e10b78015778101eadcaf0d286ef1a782ac738) Thanks [@alinurr1](https://github.com/alinurr1)! - Add checkbox component, Radix UI based

### Patch Changes

- [#156](https://github.com/Localitos/pluto/pull/156) [`fcc8b5d`](https://github.com/Localitos/pluto/commit/fcc8b5d2b81593528e7a628f86c48be37ee8c18d) Thanks [@nyan07](https://github.com/nyan07)! - Change small button size

- Updated dependencies [[`c9b7c77`](https://github.com/Localitos/pluto/commit/c9b7c7733e1bdcba9b99c5a2e89b8a7def972263)]:
  - @localyze-pluto/theme@1.2.1

## 3.0.0

### Minor Changes

- [#150](https://github.com/Localitos/pluto/pull/150) [`6bdd415`](https://github.com/Localitos/pluto/commit/6bdd415f5d22115c1b96e61806849badd73b3122) Thanks [@nyan07](https://github.com/nyan07)! - Allow breakpoints in Heading size

- [#147](https://github.com/Localitos/pluto/pull/147) [`7d61295`](https://github.com/Localitos/pluto/commit/7d61295c1fa403b3719fce8efbea5991547f4dce) Thanks [@nyan07](https://github.com/nyan07)! - Add OrderedList and UnorderedList components

- [#126](https://github.com/Localitos/pluto/pull/126) [`3a0459b`](https://github.com/Localitos/pluto/commit/3a0459bf5110233f1274a51ac6381b24c69a8b63) Thanks [@blumaa](https://github.com/blumaa)! - Adding Badge component

### Patch Changes

- [#148](https://github.com/Localitos/pluto/pull/148) [`730caf7`](https://github.com/Localitos/pluto/commit/730caf784c345c878a3cbe004899e72ded61fbd7) Thanks [@nyan07](https://github.com/nyan07)! - Add color property to heading

- [#129](https://github.com/Localitos/pluto/pull/129) [`b7d7197`](https://github.com/Localitos/pluto/commit/b7d7197ec5ed7043ec055dfde98592cfba578146) Thanks [@richbachman](https://github.com/richbachman)! - [Table]: Added `stickyHeader` and `top` props so the table header rows can stick to the top of a container or page.

- [#152](https://github.com/Localitos/pluto/pull/152) [`b1676ca`](https://github.com/Localitos/pluto/commit/b1676cae90f83085c21aabbcd8ecd1a297ac072b) Thanks [@nyan07](https://github.com/nyan07)! - Fix the padding of the Callout without background

- Updated dependencies [[`730caf7`](https://github.com/Localitos/pluto/commit/730caf784c345c878a3cbe004899e72ded61fbd7), [`3a0459b`](https://github.com/Localitos/pluto/commit/3a0459bf5110233f1274a51ac6381b24c69a8b63)]:
  - @localyze-pluto/theme@1.2.0

## 2.5.1

### Patch Changes

- [#122](https://github.com/Localitos/pluto/pull/122) [`6f7074b`](https://github.com/Localitos/pluto/commit/6f7074b7f5808146a67115a7ee7a9f56c8082bdc) Thanks [@nyan07](https://github.com/nyan07)! - Make Anchor component public

- [#123](https://github.com/Localitos/pluto/pull/123) [`5973db9`](https://github.com/Localitos/pluto/commit/5973db959ed97b0192c1c65cef64509f026bc1ed) Thanks [@nyan07](https://github.com/nyan07)! - Fix Callout types and remove role

- Updated dependencies [[`1836ab3`](https://github.com/Localitos/pluto/commit/1836ab3de869332662b30bf3bd97b3bf2c7bc1d7)]:
  - @localyze-pluto/theme@1.1.0

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
