import { SET_SELECTED, CLEAR_SELECTED } from './constants'

export function setSelected (place) {
  return {
    type: SET_SELECTED,
    // This may just set the placeid & analytics elements in the future
    selected: { ...place, loading: false }
  }
}

export function clearSelected () {
  return {
    type: CLEAR_SELECTED
  }
}
