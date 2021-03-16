/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer'

// Work this better, similar to getting default language
import { DARK_MODE } from './constants'
const DEFAULT_MODE = window.matchMedia('(prefers-color-scheme: dark)').matches

export const initialState = {
  darkMode: DEFAULT_MODE
}

const themeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DARK_MODE:
        draft.darkMode = action.darkMode
        break
    }
  })

export default themeReducer
