/**
 * @jest-environment jsdom
 */

import React from 'react'
import user from '@testing-library/user-event'
import { render as _render, screen, act, waitFor } from '@testing-library/react'
import { ThemeProvider } from '@advtr/tidy'

import { Input } from '../index'

const render = (ui, options) =>
  _render(ui, { wrapper: ({ children }) => <ThemeProvider colorScheme='light'>{children}</ThemeProvider>, ...options })

describe('Input', function () {
  it('should display the base input', function () {
    const { container } = render(<Input />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display a disabled base input', function () {
    const { container } = render(<Input isDisabled />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should clear button click', async function () {
    user.setup()

    // Just to test `handleClick` was called
    const handleClick = jest.fn()

    const { getByLabelText } = render(<Input onClick={handleClick} />)

    await act(async () => {
      // Only works on the SVG
      const btn = getByLabelText('input-icon')
      await user.click(btn)
    })

    await waitFor(() => expect(handleClick).toBeCalledTimes(1))
  })

  it('should handle text input', async function () {
    user.setup()

    // Just to test `handleInput` was called
    const text = 'Hello World'
    const handleChange = jest.fn()

    render(<Input onChange={handleChange} />)

    const input = screen.getByLabelText('Search autocomplete')
    expect(input.value).toBe('')

    await act(async () => {
      await user.type(input, text)
    })

    expect(handleChange).toBeCalledTimes(text.length)
    expect(input).toHaveValue(text)
  })
})
