/**
 * @jest-environment jsdom
 */

import React from 'react'
import PropTypes from 'prop-types'
import { render, screen, within, waitFor, fireEvent } from '@testing-library/react'

import { Dropdown } from '../index'

const ComplexCustomComponent = ({ value, color }) => (
  <span style={{ color }}>{value}</span>
)

ComplexCustomComponent.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

describe('Dropdown', function () {
  it('should match snapshot', function () {
    const { container } = render(
      <Dropdown values={['hello', 'world']} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should work w/ a custom component and object value', function () {
    const { container } = render(
      <Dropdown values={[
        {
          value: 'Hello',
          color: 'red'
        },
        {
          value: 'World',
          color: 'green'
        }
      ]} component={ComplexCustomComponent} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a list of 2', function () {
    render(
      <Dropdown values={['hello', 'world']} aria-label={'testing-dropdown'} />
    )

    const list = screen.getByRole('listbox', {
      name: /testing/i
    })

    const { getAllByRole } = within(list)
    const items = getAllByRole('option')
    expect(items.length).toBe(2)
  })

  it('should allow for items to be clicked', async function () {
    const handleClick = jest.fn()

    render(
      <Dropdown values={['hello', 'world']} aria-label={'testing-dropdown'} onSelect={handleClick} />
    )

    const list = screen.getByRole('listbox', {
      name: /testing/i
    })

    const { getAllByRole } = within(list)
    const items = getAllByRole('option')

    const idx = Math.floor(Math.random() * items.length)
    const item = items[idx]

    fireEvent.click(item)
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1))
  })
})
