import React from 'react'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider, GlobalStyle, SearchListenerProvider, get } from '@advtr/tidy'

import LanguageProvider from '../src/providers/LanguageProvider'
import { translationMessages } from '../src/i18n'

import configureStore from '../src/configureStore'
import logger from '@harrytwright/logger'

const initialState = {}
const store = configureStore(initialState, history)

const Backgrounds = createGlobalStyle`
  body {
    color: ${get('elements.foreground.default')};
    background-color: ${get('elements.canvas.default')};
  }
`

const withRedux = (Story) => {
  logger.set('level', 'notice')
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
