import { Provider } from 'react-redux'
import { createGlobalStyle } from "styled-components";
import { ThemeProvider, GlobalStyle, get } from  "@advtr/tidy"

import configureStore from '../src/configureStore'
import logger from "@harrytwright/logger";

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
        <>
          <GlobalStyle />
          <Backgrounds />
          <Story />
        </>
      </ThemeProvider>
    </Provider>
  )
}

export const decorators = [
  withRedux,
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
