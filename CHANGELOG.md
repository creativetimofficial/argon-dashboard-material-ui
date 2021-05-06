# Change Log

## [2.0.0] 2021-03-29
### Bug fixing
- Updated the license
### Major style changes
- We've followed the instructions [here](https://next.material-ui.com/guides/migration-v4/) to update our product
- All styles from `src/assets/theme/**/*.js` were removed and replaced with `sx` prop, or they were moved as part of the `src/assets/theme/theme.js`
  - checkout more here: https://next.material-ui.com/system/advanced/#heading-adding-the-sx-prop-to-your-custom-components
  - or (if the above link does not work): https://material-ui.com/system/advanced/#heading-adding-the-sx-prop-to-your-custom-components
### Deleted components
- All styles from `src/assets/theme/**/*.js`
### Added components
### Deleted dependencies
- `nouislider` this was used inside Argon Dashboard PRO React, but Material-UI comes with its own slider component
### Added dependencies
- `@babel/core@7.14.0` to stop warnings
### Updated dependencies
```
@emotion/styled                         11.1.5   →           11.3.0
@fortawesome/fontawesome-free           5.15.2   →           5.15.3
@material-ui/core                       4.11.3   →   5.0.0-alpha.32
@material-ui/icons                      4.11.3   →   5.0.0-alpha.29
@material-ui/lab                4.0.0-alpha.57   →   5.0.0-alpha.32
chart.js                                 2.9.4   →            3.2.1
react                                   17.0.1   →           17.0.2
react-chartjs-2                         2.11.1   →            3.0.3
react-dom                               17.0.1   →           17.0.2
react-scripts                            4.0.2   →            4.0.3
eslint                                  7.20.0   →           7.25.0
eslint-plugin-unused-imports             1.1.0   →            1.1.1
gulp-append-prepend                      1.0.8   →            1.0.9
typescript                               4.1.5   →            4.2.4
```
### Warning
_When doing a clean install, you might have some warnings, those come from `node_modules` and do not affect the project in any way._
_The following errors might occur while doing a clean install - They do not affect the product in any way and they will be dealt with in the stable v5 release of Material-UI:_
```
npm WARN react-datetime@3.0.4 requires a peer of moment@^2.16.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.
```

## [1.0.0] 2021-02-12
### Original Release
- Started project with Material-UI Create-React-App: https://github.com/mui-org/material-ui/tree/master/examples/create-react-app
- Added Material-UI as base framework
- Added React Hooks
- Added design from Argon Dashboard React by Creative Tim
- Added features from Argon Dashboard React by Creative Tim (such as routing system and components)
- **The TypeScript dependencies are installed only to stop console warnings on install. They are not actually used in our product. So the product is not on TypeScript!**
- We have this warning `npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.` which will be solved in our next update, if not, we'll replace react-datetime with something else
