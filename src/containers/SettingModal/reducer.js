import produce from 'immer'

import { OPEN_MODAL, CLOSE_MODAL } from './constants'

export const initialState = {
  isOpen: false
}

const settingModalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_MODAL:
        draft.isOpen = action.isOpen
        break
      case CLOSE_MODAL:
        draft.isOpen = action.isOpen
        break
    }
  })

export default settingModalReducer
