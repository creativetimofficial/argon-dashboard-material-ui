# Change Log

## [3.0.0] 2022-06-13

### Bug fixing

### Major style changes

- Migration from Material-UI to MUI v5.
- Migration from JSS to `styled` api, emotion and `sx` prop.
- Product folders and files structured are updated: [README](https://github.com/creativetimofficial/argon-dashboard-material-ui/blob/main/README.md)
- New components are added
- New example blocks are added
- Components are Example Blocks are totally customizable and reusable now
- Product now uses the react context api for global configurations

### Deleted components

All from previous version

### Added components

- ArgonAlert
- ArgonAvatar
- ArgonBadge
- ArgonBox
- ArgonButton
- ArgonInput
- ArgonPagination
- ArgonProgress
- ArgonTypography
- Breadcrumbs
- Cards
  - BlogCards
    - DefaultBlogCard
    - TransparentBlogCard
  - CounterCards
    - OutlinedCounterCard
  - InfoCards
    - DefaultInfoCard
    - ProfileInfoCard
  - MasterCard
  - PlaceholderCard
  - PricingCards
    - DefaultPricingCard
  - ProjectCards
    - DefaultProjectCard
  - StatisticsCards
    - DetailedStatisticsCard
    - MiniStatisticsCard
- Charts
  - BarCharts
    - HorizontalBarChart
    - VerticalBarChart
    - ReportsBarChart
  - BubbleChart
  - DoughnutCharts
    - DefaultDoughnutChart
  - LineCharts
    - DefaultLineChart
    - GradientLineChart
  - MixedChart
  - PieChart
  - PolarChart
  - RadarChart
- Configurator
- Footer
- Items
  - NotificationItem
- LayoutContainers
  - DashboardLayout
  - PageLayout
- Lists
  - CategoriesList
  - ProfilesList
- Navbars
  - DashboardNavbar
  - DefaultNavbar
- Sidenav
- Tables
  - SalesTable
  - Table
- Timeline
  - TimelineList
  - TimelineItem

### Deleted dependencies

```
@fortawesome/fontawesome-free
@material-ui/core
@material-ui/icons
@material-ui/lab
node-sass
nouislider
react-copy-to-clipboard
react-datetime
```

### Added dependencies

```
@mui/material
@mui/icons-material
@mui/styled-engine
@emotion/cache
chroma-js
react-countup
react-github-btn
stylis
stylis-plugin-rtl
uuid
web-vitals
yup
swiper
```

### Updated dependencies

```
"@emotion/react":               "11.1.5"  ->  "11.9.0"
"@emotion/styled":              "11.1.5"  ->  "11.8.1"
"chart.js":                     "2.9.4  ->  "3.4.1"
"prop-types":                   "15.7.2"  ->  "15.8.1"
"react":                        "17.0.1"  ->  "18.1.0"
"react-chartjs-2":              "2.11.1"  ->  "3.0.4"
"react-dom":                    "17.0.1"  ->  "18.1.0"
"react-router-dom":             "5.2.0  ->  "6.3.0"
"react-scripts":                "4.0.3  ->  "5.0.1"
```

### Warning

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
- `jss-rtl` since we now use `stylis-plugin-rtl`

### Added dependencies

- `@babel/core@7.14.0` to stop warnings
- `stylis-plugin-rtl@2.1.0` since the new Material-UI v5 API

### Updated dependencies

```
@emotion/styled                         11.1.5   →           11.3.0
@fortawesome/fontawesome-free           5.15.2   →           5.15.3
@fullcalendar/core                       5.5.1   →            5.6.0
@fullcalendar/daygrid                    5.5.0   →            5.6.0
@fullcalendar/interaction                5.5.0   →            5.6.0
@material-ui/core                       4.11.3   →   5.0.0-alpha.32
@material-ui/data-grid          4.0.0-alpha.22   →   4.0.0-alpha.27
@material-ui/icons                      4.11.2   →   5.0.0-alpha.29
@material-ui/lab                4.0.0-alpha.57   →   5.0.0-alpha.32
chart.js                                 2.9.4   →            3.2.1
react-chartjs-2                         2.11.1   →            3.0.3
react-to-print                          2.12.3   →           2.12.4
dropzone                                 5.7.6   →            5.9.2
react                                   17.0.1   →           17.0.2
react-dom                               17.0.1   →           17.0.2
eslint                                  7.20.0   →           7.25.0
eslint-plugin-unused-imports             1.1.0   →            1.1.1
gulp-append-prepend                      1.0.8   →            1.0.9
typescript                               4.1.5   →            4.2.4
```

### Warning

_When doing a clean install, you might have some warnings, those come from `node_modules` and do not affect the project in any way._
_The following errors might occur while doing a clean install - They do not affect the product in any way and they will be dealt with in the stable v5 release of Material-UI:_

```
npm WARN react-bootstrap-table-next@4.0.3 requires a peer of react@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-bootstrap-table-next@4.0.3 requires a peer of react-dom@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-bootstrap-table2-paginator@2.1.2 requires a peer of react@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-bootstrap-table2-paginator@2.1.2 requires a peer of react-dom@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-bootstrap-table2-toolkit@2.1.3 requires a peer of react@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-bootstrap-table2-toolkit@2.1.3 requires a peer of react-dom@^16.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.
npm WARN @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.13.12 requires a peer of @babel/core@^7.13.0 but none is installed. You must install peer dependencies yourself.
```

## [1.0.0] 2021-03-17

### Original Release

- Started project from [Argon Dashboard Material-UI](https://www.creative-tim.com/product/argon-dashboard-material-ui?ref=adpmui-changelog) by [Creative Tim](https://www.creative-tim.com/?ref=adpmui-changelog)
- Rename `NavbarDropdown` to `UserDropdown`
- Added Material-UI as base framework
- Added React Hooks
- Added design from [Argon Dashboard PRO React](https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpmui-changelog) by [Creative Tim](https://www.creative-tim.com/?ref=adpmui-changelog)
- Added features from [Argon Dashboard PRO React](https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpmui-changelog) by [Creative Tim](https://www.creative-tim.com/?ref=adpmui-changelog) (such as routing system and components)
- **The TypeScript dependencies are installed only to stop console warnings on install. They are not actually used in our product. So the product is not on TypeScript!**
- Refactor the Auth layout by moving the container and header inside the view components
- There are a few warnings when doing a clean install, they come from the NodeJS version and from the dependencies of our dependencies (Unfortunately, these cannot be solved, e.g. `npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142`)
- We have this warning `npm WARN react-bootstrap-table2-paginator@2.1.2 requires a peer of react@^16.3.0 but none is installed. You must install peer dependencies yourself.` which will be solved in our next update, if not, we'll replace `react-bootstrap-table2-paginator` with something else
- We have this warning `npm WARN react-bootstrap-table2-paginator@2.1.2 requires a peer of react-dom@^16.3.0 but none is installed. You must install peer dependencies yourself.` which will be solved in our next update, if not, we'll replace `react-bootstrap-table2-paginator` with something else
- We have this warning `npm WARN react-bootstrap-table2-toolkit@2.1.3 requires a peer of react@^16.3.0 but none is installed. You must install peer dependencies yourself.` which will be solved in our next update, if not, we'll replace `react-bootstrap-table2-toolkit` with something else
- We have this warning `npm WARN react-bootstrap-table2-toolkit@2.1.3 requires a peer of react-dom@^16.3.0 but none is installed. You must install peer dependencies yourself.` which will be solved in our next update, if not, we'll replace `react-bootstrap-table2-toolkit` with something else
- We have this warning `npm WARN react-bootstrap-table-next@4.0.3 requires a peer of react@^16.3.0 but none is installed. You must install peer dependencies yourself.` which will be solved in our next update, if not, we'll replace `react-bootstrap-table-next` with something else
- We have this warning `npm WARN react-bootstrap-table-next@4.0.3 requires a peer of react-dom@^16.3.0 but none is installed. You must install peer dependencies yourself.` which will be solved in our next update, if not, we'll replace `react-bootstrap-table-next` with something else
- We have this warning `npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.` which will be solved in our next update, if not, we'll replace `react-datetime` with something else
