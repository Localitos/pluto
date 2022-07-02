# Design System

## Setup Github Packages
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

## Conventional commits
We use conventional commits in order to generate packages' CHANGELOG.md file automatically.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

