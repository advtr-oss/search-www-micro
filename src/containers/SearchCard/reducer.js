/*
 *
 * SearchCard reducer
 *
 */

import produce from 'immer'

import { CLEARED_CARD, SELECTED_POI } from './constants'

export const initialState = {
  selected: {
    loading: true
  }
}

const searchCardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CLEARED_CARD:
        draft.selected = initialState.selected
        break
      case SELECTED_POI:
        draft.selected = action.selected
        break
    }
  })

export default searchCardReducer
