/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Provider } from 'react-redux'
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import user from '@testing-library/user-event'
import { GlobalStyle, ThemeProvider } from '@advtr/tidy'

import configureStore from '../../../../configureStore'
import { Card } from '../index'

const store = configureStore()

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
      await delay(1000, true) // Wait for the fake API to load
    })

    const dropdown = screen.getByRole('listbox')
    const { getAllByRole } = within(dropdown)
    const items = getAllByRole('option')

    await waitFor(() => expect(items).toHaveLength(1))

    expect(container.firstChild).toMatchSnapshot()
    expect(label).toHaveFocus()
  })

  it('should update redux state on selection', async function () {
    user.setup()

    // Add a fake item for now to pass the test
    const { getByLabelText } = redux(<Card />)

    const query = 'halifa'
    const label = getByLabelText('Search autocomplete')

    await act(async () => {
      label.focus()
      await user.type(label, query)
      await delay(1000, true) // Wait for the fake API to load
    })

    const dropdown = screen.getByRole('listbox')
    const { getAllByRole } = within(dropdown)
    const items = getAllByRole('option')

    await waitFor(() => expect(items).toHaveLength(1))
    items[0].click()

    const state = store.getState()
    expect(state.search.selected.loading).toBeFalsy()
    expect(state.search.selected.$__query).toEqual(query)
  })

  it('should clear on button press', async function () {
    user.setup()

    // Add a fake item for now to pass the test
    const { getByLabelText } = redux(<Card />)

    const query = 'halifa'
    const label = getByLabelText('Search autocomplete')

    await act(async () => {
      label.focus()
      await user.type(label, query)
      await delay(1000, true) // Wait for the fake API to load
    })

    expect(label.value).toEqual(query)

    await act(() => {
      // Only works on the SVG
      const btn = getByLabelText('input-icon')
      fireEvent.click(btn)
    })

    expect(label.value).toEqual('')
  })
})

function delay (t, val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(val)
    }, t)
  })
}
