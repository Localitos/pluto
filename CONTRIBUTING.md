# Contributing

## ariakit

We're using [@ariakit-react](https://ariakit.org) to build many of the components in Pluto.
Currently we're still using an outdated version of it (formerly named
[reakit](https://reakit.io/docs/get-started/)). For some of the components you might want to look at the
old version's documentation until we upgraded to the new version)
see https://github.com/Localitos/pluto/pull/926).

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
yarn start
```

## Generators

This repo leverages [Plop](https://plopjs.com/) to help scaffold out the files
that you need when you're creating a new component.

### New Components

Running `yarn add-component` will create the folder and files you need to start
building out your component. Each component at the very least should have an
export, documentation, testing, and a story file.

## Releases

Releases happen on every merge to main when a package has changes. Our packages
are published to NPM using Changesets. For more information about it, click
[here](https://github.com/changesets/changesets/blob/main/docs/detailed-explanation.md).

### Creating a Changeset

If you are updating or adding a package in a Pull Request, run:

```shell
yarn changeset
```

And follow the prompts to generate a new Changeset. Make sure you commit the
Changeset in your PR.

## Conventional commits

We use conventional commits in order to generate packages' CHANGELOG.md file
automatically. See [Conventional Commits](https://conventionalcommits.org) for
commit guidelines.

Commits should also reference which package the work is being one in. For
example if you're committing a change to the Pluto Theme package, the commit
message should look something like:

```shell
feat(theme): your commit message goes here
```

This will help Changesets determine which package `CHANGELOG.md` file to update.
If you are commiting to multiple packages in a single PR, please rebase and
merge the final commits for each package.

## Using locally

install [yalc](https://github.com/wclr/yalc)

```
npm install yalc -g
```

go to the Pluto packages/ folders you need updated locally, for example

**Step 1**

```
cd path_to_pluto_folder/packages/components && yarn build && yalc publish
cd path_to_pluto_folder/packages/theme && yarn build && yalc publish
```

go to the folder of the project that uses Pluto and run

```
yalc link @localyze-pluto/components
```

now every time you do a change you can repeat **Step 1** and then, on the folder of the project that
uses Pluto

```
yalc update @localyze-pluto/components
```
