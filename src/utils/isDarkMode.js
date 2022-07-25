import { themes } from '@advtr/tidy'

export default function isDarkMode (dark, light) {
  return function ({ theme }) {
    if (Object.is(themes.dark, theme)) return dark({ theme })
    return light({ theme })
  }
}
