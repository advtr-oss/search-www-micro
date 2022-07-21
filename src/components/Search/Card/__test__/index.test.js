/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Provider } from 'react-redux'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import user from '@testing-library/user-event'
import { GlobalStyle, ThemeProvider } from '@advtr/tidy'

import configureStore from '../../../../configureStore'
import Card from '../index'

globalThis.IS_REACT_ACT_ENVIRONMENT = true

const initialState = {}
const store = configureStore(initialState, history)

// Add theme provider here too, will look at moving this out and adding a generic one
const redux = (ui, opts) => render((
  <Provider store={store}>
    <ThemeProvider>
      <React.Fragment>
        <GlobalStyle />
        <React.Fragment>{ui}</React.Fragment>
      </React.Fragment>
    </ThemeProvider>
  </Provider>
), opts)

describe('Search.Card', function () {
  it('should render a snapshot', function () {
    const { container } = redux(<Card />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render loading dropdown on focus and typing', async function () {
    user.setup()

    const { getByLabelText, container } = redux(<Card />)

    const label = getByLabelText('Search autocomplete')
    expect(label.value).toBe('')

    await act(async () => {
      label.focus()
      await user.type(label, 'H')
    })

    expect(container.firstChild).toMatchSnapshot()
    expect(label).toHaveFocus()
  })

  it('should render search dropdown on focus and typing', async function () {
    user.setup()

    // Add a fake item for now to pass the test
    const { getByLabelText, container } = redux(<Card />)

    const label = getByLabelText('Search autocomplete')
    expect(label.value).toBe('')

    await act(async () => {
      label.focus()
      await user.type(label, 'halifa')
      await delay(1000, true)
    })

    const dropdown = screen.getByRole('listbox')
    const { getAllByRole } = within(dropdown)
    const items = getAllByRole('option')

    await waitFor(() => expect(items).toHaveLength(1))

    expect(container.firstChild).toMatchSnapshot()
    expect(label).toHaveFocus()

    global.mock_delay = 100
  })
})

function delay (t, val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(val)
    }, t)
  })
}
