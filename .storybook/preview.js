import { createGlobalStyle } from "styled-components";
import { ThemeProvider, GlobalStyle, get } from  "@advtr/tidy"

const Backgrounds = createGlobalStyle`
  body {
    color: ${get('elements.foreground.default')};
    background-color: ${get('elements.canvas.default')};
  }
`

export const decorators = [
  (Story) => (
    <ThemeProvider colorScheme="auto">
      <GlobalStyle />
      <Backgrounds />
      <Story />
    </ThemeProvider>
  ),
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
