/*
 *
 * LanguageProvider reducer
 *
 * Now actively looks for the users language
 *
 * @note: Not the best but will work
 */

import produce from 'immer'
import get from 'lodash.get'
import split from 'lodash.split'
import includes from 'lodash.includes'

import { CHANGE_LOCALE, LOCALE_KEY } from './constants'
import { DEFAULT_LOCALE, appLocales } from '../../i18n'

// Detect user language.
const userLanguage =
  window.localStorage.getItem(LOCALE_KEY) ||
  window.navigator.language ||
  window.navigator.userLanguage

let foundLanguage = includes(appLocales, userLanguage) && userLanguage

if (!foundLanguage) {
  // Split user language in a correct format.
  const userLanguageShort = get(split(userLanguage, '-'), '0')

  // Check that the language is included in the admin configuration.
  foundLanguage = includes(appLocales, userLanguageShort) && userLanguageShort
}

export const initialState = {
  locale: foundLanguage || DEFAULT_LOCALE
}

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        window.localStorage && window.localStorage.setItem(LOCALE_KEY, action.locale)
        draft.locale = action.locale
        break
    }
  })

export default languageProviderReducer
