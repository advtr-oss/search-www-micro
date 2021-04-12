import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the languageToggle state domain
 */
const selectModalState = state => state.modal || initialState

/**
 * Select the language locale
 */

const makeSelectModalState = () =>
  createSelector(
    selectModalState,
    modalState => modalState.isOpen
  )

export { selectModalState, makeSelectModalState }
