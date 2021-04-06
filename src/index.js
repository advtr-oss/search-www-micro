/**
 *
 * index.js
 *
 * Entry point of the application
 */

import 'sanitize.css/sanitize.css'

// Third party css library needed
// import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from './utils/history'

// Analytics
import './utils/ga'
import sendWebVitalsToGA from './utils/webVitalsAnalytics'

// import serviceWorker from './serviceWorker'
import reportWebVitals from './reportWebVitals'

// Import root app
import App from './containers/App'

// Import Language Provider
import LanguageProvider from './containers/LanguageProvider'

import configureStore from './configureStore'

// Import i18n messages
import { translationMessages } from './i18n'

// Providers
import DeviceProvider from './containers/DeviceProvider'
import Fonts from './components/Fonts'

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, history)

const MOUNT_NODE = document.getElementById('root') || document.createElement('div')

const render = messages => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Fonts />
        <LanguageProvider messages={messages}>
          <DeviceProvider>
            <ConnectedRouter history={history}>
              <App />
            </ConnectedRouter>
          </DeviceProvider>
        </LanguageProvider>
      </Provider>
    </React.StrictMode>,
    MOUNT_NODE
  )
}

// Global objects
window.advtr = Object.assign(window.advtr || {}, {
  env: process.env.NODE_ENV,
  uri: 'advtr.co.uk',
  router: history,
  languages: translationMessages,
  store
})

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', './containers/App'], () => {
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
reportWebVitals(sendWebVitalsToGA)
