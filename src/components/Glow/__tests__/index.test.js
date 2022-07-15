/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'

import { Glow } from '../index'

describe('Dropdown', function () {
  it('should match snapshot', function () {
    const { container } = render(
      <Glow />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
