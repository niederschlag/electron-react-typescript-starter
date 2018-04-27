# :heavy_exclamation_mark::heavy_exclamation_mark::heavy_exclamation_mark: THIS PROJECT IS WIP AND WILL BE MAINTAINED:tm: :heavy_exclamation_mark::heavy_exclamation_mark::heavy_exclamation_mark:

## Todo:
- Create Project :white_check_mark:
- Add proper TSLint :white_check_mark:
- Check through all files :white_check_mark:
- Add Tests :x:
- Set-up CI ([CircleCI](https://github.com/marketplace/circleci)) :white_check_mark:
- Set-up auto dependency update ([Greenkeeper](https://github.com/marketplace/greenkeeper) / [Gemnasium](https://github.com/marketplace/gemnasium) / [Renovate](https://github.com/marketplace/renovate/)) :x:
- Set-up security management ([Snyk](https://github.com/marketplace/snyk)) :white_check_mark:
- Set-up code quality management ([Codefactor](https://github.com/marketplace/codefactor) / [StyleCI](https://github.com/marketplace/styleci))
- Code coverage? ([Codecov](https://github.com/marketplace/codecov))


# electron-react-typescript-starter

[![CircleCI](https://circleci.com/gh/niederschlag/electron-react-typescript-starter/tree/master.svg?style=svg)](https://circleci.com/gh/niederschlag/electron-react-typescript-starter/tree/master) [![Known Vulnerabilities](https://snyk.io/test/github/niederschlag/electron-react-typescript-starter/badge.svg?targetFile=package.json)](https://snyk.io/test/github/niederschlag/electron-react-typescript-starter?targetFile=package.json)

This is a modificiation of the great [electron-react-boilerplate](https://github.com/iRath96/electron-react-typescript-boilerplate).

[Electron](http://electron.atom.io/) application boilerplate based on [React](https://facebook.github.io/react), [Redux](https://github.com/reactjs/redux), [React Router](https://github.com/reactjs/react-router), [Webpack](http://webpack.github.io/docs/), [React Transform HMR](https://github.com/gaearon/react-transform-hmr) and [TypeScript](https://github.com/Microsoft/TypeScript) for rapid application development.
In addition to that, [Jest](https://github.com/facebook/jest), [TSLint](https://github.com/palantir/tslint) and [Sass](https://sass-lang.com)

## Run
Run this command to start the app

```bash
$ yarn dev
```

or run these two commands __simultaneously__ in different console tabs.
```bash
$ yarn hot-server
$ yarn start-hot
```

## DevTools
### DevTools extension
This boilerplate is included following DevTools extensions:
* [Devtron](https://github.com/electron/devtron) - Install via [electron-debug](https://github.com/sindresorhus/electron-debug).
* [React Developer Tools](https://github.com/facebook/react-devtools) - Install via [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer).
* [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) - Install via [electron-devtools-installer](https://github.com/GPMDP/electron-devtools-installer).

You can find the tabs on Chrome DevTools.

If you want to update extensions version, please set `UPGRADE_EXTENSIONS` env, just run:

```bash
$ UPGRADE_EXTENSIONS=1 yarn dev

# For Windows
$ set UPGRADE_EXTENSIONS=1 && yarn dev
```



## CSS Modules
This boilerplate out of the box is configured to use [css-modules](https://github.com/css-modules/css-modules).

All `.css` file extensions will use css-modules unless it has `.global.css`.

If you need global styles, stylesheets with `.global.css` will not go through the
css-modules loader. e.g. `app.global.css`

If you want to import global css libraries (like `bootstrap`), you can just write the following code in `.global.css`:

```css
@import "~bootstrap/dist/css/bootstrap.css";
```


## Packaging
To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build) for dependencies.

Then,
```bash
$ yarn package-all
```

To package apps with options:

```bash
$ yarn package -- --[option]
```

## Further commands
To run the application without packaging run

```bash
$ yarn build
$ yarn start
```

To run End-to-End Test

```bash
$ yarn build
$ yarn test-e2e
```

#### Options
See [electron-builder CLI Usage](https://github.com/electron-userland/electron-builder#cli-usage)

#### Module Structure
This boilerplate uses a [two package.json structure](https://github.com/electron-userland/electron-builder#two-packagejson-structure).

1. If the module is native to a platform or otherwise should be included with the published package (i.e. bcrypt, openbci), it should be listed under `dependencies` in `./app/package.json`.
2. If a module is `import`ed by another module, include it in `dependencies` in `./package.json`.   See [this ESLint rule](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md).
3. Otherwise, modules used for building, testing and debugging should be included in `devDependencies` in `./package.json`.

## Static Type Checking
This project comes with Flow support out of the box! You can annotate your code with types, [get Flow errors as ESLint errors](https://github.com/amilajack/eslint-plugin-flowtype-errors), and get [type errors during runtime](https://github.com/gcanti/babel-plugin-tcomb-boilerplate) during development. Types are completely optional.

## Native-like UI
If you want to have native-like User Interface (OS X El Capitan and Windows 10), [react-desktop](https://github.com/gabrielbull/react-desktop) may perfect suit for you.