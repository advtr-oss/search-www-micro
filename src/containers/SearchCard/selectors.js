import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectSearchCard = state => state.searchCard || initialState

const makeSelectCardInput = () =>
  createSelector(
    selectSearchCard,
    state => state.selected
  )

export { selectSearchCard, makeSelectCardInput }
