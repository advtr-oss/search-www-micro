import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import logger from '@harrytwright/logger'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider, GlobalStyle, SearchListenerProvider, get } from '@advtr/tidy'

import LanguageProvider from '../src/providers/LanguageProvider'
import { translationMessages } from '../src/i18n'

import configureStore from '../src/configureStore'

import { DEVELOPMENT, PRODUCTION, STAGING } from '../src/utils/networking'

const initialState = {}
const store = configureStore(initialState, history)

const api = /staging/gi.test(process.env.NODE_ENV)
  ? STAGING
  : /production/gi.test(process.env.NODE_ENV)
    ? PRODUCTION
    : DEVELOPMENT

const Backgrounds = createGlobalStyle`
  body {
    color: ${get('elements.foreground.default')};
    background-color: ${get('elements.canvas.default')};
  }
`

const withRedux = (Story) => {
  logger.set('level', 'notice')

  useEffect(() => {
    !Object.hasOwn(window, 'advtr') && Object.defineProperty(window, 'advtr', {
      value: {
        api
      }
    })
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider colorScheme="auto">
        <LanguageProvider messages={translationMessages}>
          <SearchListenerProvider listener='Semicolon' escape='Escape' >
            <React.Fragment>
              <GlobalStyle />
              <Backgrounds />
              <Story />
            </React.Fragment>
          </SearchListenerProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  )
}

export const decorators = [
  withRedux
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
