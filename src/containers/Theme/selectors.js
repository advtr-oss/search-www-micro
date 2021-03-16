import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectDarkMode = state => state.theme || initialState

const makeSelectDarkMode = () =>
  createSelector(
    selectDarkMode,
    state => state.darkMode
  )

export { selectDarkMode, makeSelectDarkMode }
