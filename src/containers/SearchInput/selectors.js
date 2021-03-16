import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectSearchInput = state => state.searchInput || initialState

const makeSelectSearchInput = () =>
  createSelector(
    selectSearchInput,
    state => state.value
  )

export { selectSearchInput, makeSelectSearchInput }
