/*
 *
 * SearchInput reducer
 *
 */

import produce from 'immer'

import { UPDATE_SEARCH, CLEAR_SEARCH } from './constants'

export const initialState = {
  value: ''
}

const searchInputReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CLEAR_SEARCH:
        draft.value = initialState.value
        break
      case UPDATE_SEARCH:
        draft.value = action.value
        break
    }
  })

export default searchInputReducer
