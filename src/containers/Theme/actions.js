/*
 *
 * Theme actions
 *
 */

import { DARK_MODE } from './constants'

export function changeTheme (darkMode) {
  return {
    type: DARK_MODE,
    darkMode
  }
}
