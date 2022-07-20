/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import { Dropdown } from '../index'

const noop = () => {}

describe('Search.Dropdown', function () {
  it('should display the container', function () {
    const { container } = render(<Dropdown values={[]} onSelect={noop} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display the loading container', function () {
    const { container } = render(<Dropdown values={[]} onSelect={noop} loading />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
