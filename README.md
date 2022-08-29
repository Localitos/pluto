# Pluto - Localyze Design System

<p align="center"><img src="public/pluto.webp?raw=true" /></p>

Pluto is a design system used to build accessible, consistent, and high quality public-facing experiences at Localyze.

[![Netlify Status](https://api.netlify.com/api/v1/badges/b05a949c-18c2-42e3-84e1-9c4779b7ccb3/deploy-status)](https://app.netlify.com/sites/pluto-design-system/deploys)

## Local Development

Clone the Pluto repository anywhere on your computer.

```shell
git clone git@github.com:Localitos/pluto.git
```

Install and bootstrap Pluto dependencies.

```shell
yarn install
```

Build Pluto.

```shell
yarn build
```

Run Storybook.

```shell
yarn storybook
```

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
npm install --save @localitos/pluto-theme @localitos/pluto-icons @localitos/pluto-components
```

### 3. Build some cool stuff.

Enough said.

### 4. Feedback

Let us know if you have any [feedback](https://github.com/Localitos/pluto/discussions/new) or [issues](https://github.com/Localitos/pluto/issues/new).

## Generators

This repo leverage [Plop](https://plopjs.com/) to help scaffold out the files that you need when you're creating a new component.

### New Components

Running `yarn add-component` will create the folder and files you need to start building out your component. Each component at the very least should have an export, documentation, testing, and a story file.

## Releases

TODO: Change this section to reflect publishing on NPM with Changesets.

1. Create a [Github Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with packages permissions.
2. Login into Github Packages (the password should be the token created on the step before)

```
npm login --registry=https://npm.pkg.github.com
```

3. Create a `~/.npmrc` file

## Conventional commits

We use conventional commits in order to generate packages' CHANGELOG.md file automatically.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.
