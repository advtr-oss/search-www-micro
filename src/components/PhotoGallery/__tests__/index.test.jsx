/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle, ThemeProvider } from '@advtr/tidy'
import { render as rtlRender } from '@testing-library/react'

import { PhotoGallery } from '../index'
import { results } from '../../../../mock/photos/[200].json'

import configureStore from '../../../configureStore'
import LanguageProvider from '../../../providers/LanguageProvider'
import { translationMessages } from '../../../i18n'

const store = configureStore()

const render = (ui, opts) => rtlRender(ui, {
  wrapper: ({ children }) => (
    <Provider store={store}>
      <ThemeProvider colorScheme='light'>
        <LanguageProvider messages={translationMessages}>
          <React.Fragment>
            <GlobalStyle />
            <React.Fragment>{children}</React.Fragment>
          </React.Fragment>
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  ),
  ...opts
})

describe('PhotoGallery', function () {
  it('should render snapshot', function () {
    const { container } = render(
      <PhotoGallery photos={results} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
