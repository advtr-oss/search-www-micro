/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import LanguageProvider from '../index'

import { translationMessages } from '../../../i18n'
import configureStore from '../../../configureStore'

const initialState = {}
const store = configureStore(initialState, history)

const redux = (ui, opts) => render((
  <Provider store={store}>
    <>{ui}</>
  </Provider>
), opts)

describe('LanguageProvider', function () {
  // This mainly checks that it doesn't throw, and we get a snapshot out
  // of it, so we know it renders a child component of out choice, will
  // require a new snap each time we update translationMessages, so we know
  // they are updated too
  it('should render snapshot', function () {
    const { container } = redux(
      <LanguageProvider messages={translationMessages}>
        <div dangerouslySetInnerHTML={{ __html: JSON.stringify(translationMessages) }} />
      </LanguageProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
