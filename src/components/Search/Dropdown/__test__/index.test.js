/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render as _render } from '@testing-library/react'
import { ThemeProvider } from '@advtr/tidy'

import { Dropdown } from '../index'

const render = (ui, options) =>
  _render(ui, { wrapper: ({ children }) => <ThemeProvider colorScheme='light'>{children}</ThemeProvider>, ...options })

const noop = () => {}

const mockData = [
  {
    type: 'city',
    containers: {
      entity: { value: 'Halifax' },
      nation: { value: 'United Kingdom' }
    }
  },
  {
    type: 'airport',
    containers: {
      entity: { value: 'Manchester Airport' },
      nation: { value: 'United Kingdom' }
    }
  }
]

describe('Search.Dropdown', function () {
  it('should display empty container', function () {
    const { container } = render(<Dropdown values={[]} onSelectionChange={noop} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display the loading container', function () {
    const { container } = render(<Dropdown values={[]} onSelectionChange={noop} isLoading />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display the mocked container', function () {
    const { container } = render(<Dropdown values={mockData} onSelectionChange={noop} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
