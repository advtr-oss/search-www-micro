import colorSystem from './color-system'

// Border-colors

const border = {
  white: colorSystem.white,
  'white-fade': colorSystem.fades['white-15'],
  'black-fade': colorSystem.fades['black-15'],
  gray: colorSystem.grays['200'],
  'gray-dark': colorSystem.grays['300'],
  'gray-darker': colorSystem.grays['700'],
  'gray-light': `lighten(${colorSystem.grays['200']}, 3%)`,
  red: colorSystem.red,
  'red-light': colorSystem.reds['300'],
  green: colorSystem.green,
  'green-light': `lighten(${colorSystem.green}, 40%)`,
  blue: colorSystem.blue,
  'blue-light': colorSystem.reds['200']
}

// Backgrounds

const backgrounds = {
  white: colorSystem.white,
  black: colorSystem.black,
  'black-fade': colorSystem.fades['black-50'],
  gray: colorSystem.grays['100'],
  'gray-light': colorSystem.grays['000'],
  'gray-dark': colorSystem.grays['900'],
  blue: colorSystem.blue,
  'blue-light': colorSystem.blues['000'],
  green: colorSystem.green,
  'green-light': colorSystem.greens['100'],
  red: colorSystem.red,
  'red-light': colorSystem.reds['000']
}

// Text

const text = {
  black: colorSystem.black,
  white: colorSystem.white,
  gray: colorSystem.gray,
  'gray-light': colorSystem['gray-light'],
  'gray-dark': colorSystem['gray-dark'],
  blue: colorSystem.blue,
  green: colorSystem.green,
  red: colorSystem.red
}

// Export

const colors = {
  backgrounds,
  border,
  text
}

export default colors

// /**
//  * These colours aren't 100%
//  *
//  * Also need a Puma{dur/thane/flow} colours so we can theme each page to match
//  * */
// const colors = {
//   black: '#333740',
//   white: '#ffffff',
//   red: '#ff203c',
//   orange: '#ff5d00',
//   lightOrange: '#f64d0a',
//   yellow: '#ffd500',
//   green: '#6dbb1a',
//   blue: '#0097f7',
//   teal: '#5bc0de',
//   pink: '#ff5b77',
//   purple: '#613d7c',
//   gray: '#464a4c',
//   border: '#E3E9F3',
//   'gray-dark': '#292b2c',
//   grayLight: '#636c72',
//   'gray-lighter': '#eceeef',
//   'gray-lightest': '#f7f7f9',
//   brightGrey: '#f0f3f8',
//   darkGrey: '#e3e9f3',
//   lightGrey: '#fafafa',
//   lightestGrey: '#fbfbfb',
//   mediumGrey: '#F2F3F4',
//   grey: '#9ea7b8',
//   greyDark: '#292b2c',
//   greyAlpha: 'rgba(227, 233, 243, 0.5)',
//   lightBlue: '#E6F0FB',
//   mediumBlue: '#007eff',
//   darkBlue: '#AED4FB',
//   content: {
//     background: '#fafafb',
//     'background-alpha': 'rgba(14, 22, 34, 0.02)'
//   },
//   leftMenu: {
//     'link-hover': '#1c2431',
//     'link-color': '#919bae',
//     'title-color': '#5b626f'
//   },
//   text: {
//     primary: '#4A4A4A',
//     secondary: '#9B9B9B'
//   },
//   resdev: {
//     'gray-light': '#eff3f6',
//     gray: '#535f76',
//     'red-darker': '#160505',
//     'red-dark': '#5B1714',
//     red: '#E43B32',
//     'red-light': '#E9625B',
//     'red-lighter': '#F9D7D6'
//   }
// }
//
// // export default colors
