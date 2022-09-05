import { themes, resolve } from '@advtr/tidy'

export default function isLightMode (light, dark) {
  return function ({ theme }) {
    if (Object.is(themes.light, theme)) return resolve(light)({ theme })
    return resolve(dark)({ theme })
  }
}
