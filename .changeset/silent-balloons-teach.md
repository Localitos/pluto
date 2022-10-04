---
"@localyze-pluto/theme": major
---

BREAKING CHANGE

[Theme]: The underlying styling library has been changed from using StitchesJS to xStyled.

- The `theme` now follows the xStyled theme format.
- `globalStyles` has been replaced with `<GlobalStyles>`.
- `ThemeProvider` and `Preflight` are now exported.
- `ThemeProvider` must be used by teams in order for components to read the theme context.
