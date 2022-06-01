/*
 * LocaleToggle Messages
 *
 * This contains all the text for the LanguageToggle component.
 */
import { defineMessages } from 'react-intl'

export const scope = 'boilerplate.containers.locale'

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'English'
  },
  fr: {
    id: `${scope}.fr`,
    defaultMessage: 'French'
  }
})
