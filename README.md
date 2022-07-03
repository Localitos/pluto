# Design System

## Setting up Github Packages
1. Create a [Github Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with packages permissions.
2. Login into Github Packages (the password should be the token created on the step before)

```
npm login --registry=https://npm.pkg.github.com
```

3. Create a `~/.npmrc` file

```
//npm.pkg.github.com/:_authToken=TOKEN
@localitos:registry=https://npm.pkg.github.com
```

## Adding a new component
We use plop to create the boilerplate for a new component automatically.

```
npx plop
```

or 

```
yarn add-component
```

## Installing and linking dependencies
We use lerna to manage our Design System monorepo. 

```
npx lerna bootstrap
```

or 

```
yarn bootstrap
```

For more useful commands, see [Lerna Commands](https://lerna.js.org/docs/api-reference/commands).



## Conventional commits
We use conventional commits in order to generate packages' CHANGELOG.md file automatically.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

