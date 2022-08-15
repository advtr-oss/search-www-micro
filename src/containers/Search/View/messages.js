import { defineMessages } from 'react-intl'

export const scope = 'app.containers.SearchView'

export default defineMessages({
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Search for a city'
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Search Results'
  },
  'aria-input': {
    id: `${scope}.aria-input`,
    defaultMessage: 'Search Autocomplete'
  }
})
