/*
 *
 * SearchCard actions
 *
 */

import { CLEARED_CARD, SELECTED_POI } from './constants'

export function selectPOI (selected) {
  return {
    type: SELECTED_POI,
    selected: { ...selected, loading: false }
  }
}

export function clearPOI () {
  return {
    type: CLEARED_CARD
  }
}
