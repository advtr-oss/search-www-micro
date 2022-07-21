import produce from 'immer'

import { SET_SELECTED, CLEAR_SELECTED } from './constants'

export const initialState = {
  selected: {
    loading: true
  }
}

const searchCardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SELECTED:
        draft.selected = action.selected
        break
      case CLEAR_SELECTED:
        draft.selected = initialState.selected
        break
    }
  })

export default searchCardReducer
