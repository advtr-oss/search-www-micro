/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './utils/history';

// Dynamically load these??
import themeReducer from './containers/Theme/reducer'
import searchCardReducer from "./containers/SearchCard/reducer";
import searchInputReducer from './containers/SearchInput/reducer'
import languageProviderReducer from './containers/LanguageProvider/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    theme: themeReducer,
    language: languageProviderReducer,
    searchInput: searchInputReducer,
    searchCard: searchCardReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
