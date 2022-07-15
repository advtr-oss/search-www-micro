/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react'

import { Input } from '../index'

describe('Input', function () {
  it('should display the base input', function () {
    const { container } = render(<Input />)
    expect(container.firstChild).toMatchSnapshot()
  })


  it('should hide icon', async function () {
    const { getByLabelText } = render(<Input hide />)

    const icn = getByLabelText('input-icon')
    expect(icn).not.toBeVisible()
  })

  it('should display a disabled base input', function () {
    const { container } = render(<Input disabled />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should clear button click', async function () {
    // Just to test `handleClick` was called
    const handleClear = jest.fn()

    const { getByLabelText } = render(<Input onClear={handleClear} hide={false} />)

    act(() => {
      // Only works on the SVG
      const btn = getByLabelText('input-icon')
      fireEvent.click(btn)
    })

    await waitFor(() => expect(handleClear).toBeCalledTimes(1))
  })

  it('should handle text input', async function () {
    // Just to test `handleInput` was called
    const handleInput = jest.fn()

    render(<Input onInput={handleInput} value={''} />)
    expect(screen.getByLabelText('Search autocomplete').value).toBe('')

    await act(() => {
      fireEvent.input(screen.getByLabelText('Search autocomplete'), {
        target: { value: 'Hello World' }
      })
    })

    expect(screen.getByLabelText('Search autocomplete').value).toBe('Hello World')
    expect(handleInput).toBeCalledTimes(1)
  });
})
