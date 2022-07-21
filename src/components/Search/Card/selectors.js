import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectSelected = state => state.search || initialState

const makeSelectSelected = () =>
  createSelector(
    selectSelected,
    selectedState => selectedState.selected
  )

export { selectSelected, makeSelectSelected }
