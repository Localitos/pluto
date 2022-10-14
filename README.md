# Pluto - Localyze Design System

<p align="center"><img src="public/pluto.webp?raw=true" /></p>

Pluto is a design system used to build accessible, consistent, and high quality public-facing experiences at Localyze.

## Getting Started

👋 Hi. Follow the steps below to begin building with Pluto

### 1. Install external dependencies

| Package   | Version |
| --------- | ------- |
| react     | 18.x    |
| react-dom | 18.x    |

```shell npm2yarn
npm install --save react react-dom
```

### 2. Install Pluto packages

Install the following packages so you can consume Pluto's tokens and themes to build custom page sections.

```bash npm2yarn
npm install --save @localyze-pluto/theme @localyze-pluto/components
```

### 3. Setup the ThemeProvider

The ThemeProvider needs to be set so the Pluto components receive the correct styles. You should wrap your whole application with this provider.

```js
import { ThemeProvider, theme } from "@localyze-pluto/theme";

<Theme.Provider theme={theme}>
  <App />
</Theme.Provider>;
```

We also offer some reset, global, and base styles you can use to make styling a little easier.

```js
import {
  ThemeProvider,
  theme,
  GlobalStyles,
  BaseStyles,
  Preflight,
} from "@localyze-pluto/theme";

<Theme.Provider theme={theme}>
  <Preflight />
  <GlobalStyles />
  <BaseStyles />
  <App />
</Theme.Provider>;
```

#### Fonts

Currently we only offer have one font family (Moderat) for use within Localyze applications. The Moderat font files must be loaded in the Localyze application because of licensing. [Here's how we're loading the fonts in Storybook](https://github.com/Localitos/pluto/blob/main/.storybook/preview-head.html). We're open to the idea of offering an open source font with Pluto. If you have any ideas on which fonts to offer, please open a [discussion](https://github.com/Localitos/pluto/discussions/new).

### 3. Build some cool stuff.

Enough said.

### 4. Feedback

Let us know if you have any [feedback](https://github.com/Localitos/pluto/discussions/new) or [issues](https://github.com/Localitos/pluto/issues/new).
