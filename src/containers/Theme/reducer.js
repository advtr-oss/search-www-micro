/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer'
import Cookies from 'universal-cookie'

// Work this better, similar to getting default language
import { DARK_MODE } from './constants'

const cookies = new Cookies()

const darkModeCookie = cookies.get('theme')
let DEFAULT_MODE = (darkModeCookie ? darkModeCookie === 'dark' : null)

if (DEFAULT_MODE === null) {
  DEFAULT_MODE = window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const initialState = {
  darkMode: DEFAULT_MODE
}

const themeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DARK_MODE:
        cookies.set('theme', action.darkMode ? 'dark' : 'light')
        draft.darkMode = action.darkMode
        break
    }
  })

export default themeReducer
