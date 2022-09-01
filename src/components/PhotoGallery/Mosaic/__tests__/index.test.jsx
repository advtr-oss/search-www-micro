/**
 * @jest-environment jsdom
 */

import React from 'react'
import { GlobalStyle, ThemeProvider } from '@advtr/tidy'
import { render as rtlRender } from '@testing-library/react'

import { Mosaic } from "../index"
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

describe('PhotoGallery.Mosaic', function () {
  it('should render snapshot', function () {
    const { container } = render(
      <Mosaic photos={results} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
});
