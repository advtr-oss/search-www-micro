import { themes, resolve } from '@advtr/tidy'

export default function isDarkMode (dark, light) {
  return function ({ theme }) {
    if (Object.is(themes.dark, theme)) return resolve(dark)({ theme })
    return resolve(light)({ theme })
  }
}
