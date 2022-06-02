/**
 *
 * index.js
 *
 * Entry point of the application
 */

import 'sanitize.css/sanitize.css'

// This is to check for multiple react versions, add `window.React1 = require('react')` first to ReactDOM `index.js`
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

// Third party css library needed
// import 'bootstrap/dist/css/bootstrap.min.css'

import './utils/process-shim'

import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ReactDOMClient from 'react-dom/client'

import { GlobalStyle } from '@advtr/tidy'

import logWebVitals from './utils/logWebVitals'
// import serviceWorkers from './serviceWorkers'
import reportWebVitals from './reportWebVitals'

// Import Language Provider
import LanguageProvider from './containers/LanguageProvider'

import configureStore from './configureStore'

// Import i18n messages
import { translationMessages } from './i18n'
import LanguageSelect from './containers/LanguageSelect'

// Load the theme
import { Theme } from './containers/Theme'

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, history)

const MOUNT_NODE = document.getElementById('root') || document.createElement('div')

const render = (messages) => {
  const root = ReactDOMClient.createRoot(MOUNT_NODE)
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <LanguageProvider messages={messages}>
          <Theme>
            <Fragment>
              <GlobalStyle />
              <LanguageSelect />
            </Fragment>
          </Theme>
        </LanguageProvider>
      </Provider>
    </React.StrictMode>
  )
}

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render(translationMessages)
  })
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'))
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err
    })
} else {
  render(translationMessages)
}

reportWebVitals(logWebVitals)
