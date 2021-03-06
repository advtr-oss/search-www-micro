/*
 * App Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl'

export const scope = 'app.containers.SearchCard'

export default defineMessages({
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Search for a city'
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Search Results'
  }
})
