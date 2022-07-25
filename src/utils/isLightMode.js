import { themes } from '@advtr/tidy'

export default function isLightMode (light, dark) {
  return function ({ theme }) {
    if (Object.is(themes.light, theme)) return light({ theme })
    return dark({ theme })
  }
}
