/**
 * @jest-environment jsdom
 */

import React from 'react'
import { GlobalStyle, ThemeProvider } from '@advtr/tidy'
import { render as rtlRender } from '@testing-library/react'

import { Item } from '../index'
import { results } from '../../../../../mock/photos/[200].json'

const render = (ui, opts) => rtlRender(ui, {
  wrapper: ({ children }) => (
    <ThemeProvider colorScheme='light'>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  ),
  ...opts
})

describe('PhotoGallery.Item', function () {
  it('should render snapshot', function () {
    const { container } = render(
      <Item {...results[0]} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
