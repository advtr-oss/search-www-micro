/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { GlobalStyle, ThemeProvider } from '@advtr/tidy'
import LanguageProvider from '../../../../providers/LanguageProvider'

import { translationMessages } from '../../../../i18n'

import configureStore from '../../../../configureStore'
import { View } from '../index'
import { changeLocale } from '../../../../providers/LanguageProvider/actions'

const store = configureStore()

// Add theme provider here too, will look at moving this out and adding a generic one
const redux = (ui, opts) => render((
  <Provider store={store}>
    <ThemeProvider>
      <LanguageProvider messages={translationMessages}>
        <React.Fragment>
          <GlobalStyle />
          <React.Fragment>{ui}</React.Fragment>
        </React.Fragment>
      </LanguageProvider>
    </ThemeProvider>
  </Provider>
), opts)

describe('Search.View', function () {
  it('should render a snapshot', function () {
    const { container } = redux(<View />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with changed locale', function () {
    store.dispatch(changeLocale('fr'))

    const { container } = redux(<View />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
