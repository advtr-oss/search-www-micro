/**
 * SearchInput action
 * */

import { UPDATE_SEARCH, CLEAR_SEARCH } from './constants'

export function updateSearch (value) {
  return {
    type: UPDATE_SEARCH,
    value
  }
}

export function clearSearch () {
  return {
    type: CLEAR_SEARCH
  }
}
