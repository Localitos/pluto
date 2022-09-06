# Contributing

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
