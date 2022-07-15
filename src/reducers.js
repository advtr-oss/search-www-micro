/**
 * Combine all reducers in this file and export the combined reducers.
 */

// import { sync } from "glob";
import { combineReducers } from 'redux'

// Dynamically load these??
import languageProviderReducer from './providers/LanguageProvider/reducer'

// sync('**/reducer.js', { cwd: __dirname })
//   .map((el) => console.log(el))

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer (injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    ...injectedReducers
  })

  return rootReducer
}
