/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { GlobalStyle, ThemeProvider } from '@advtr/tidy'

import { Title } from '../index'

const render = (ui, opts) => rtlRender(ui, {
  ...opts,
  wrapper: ({ children }) => (
    <ThemeProvider colorScheme='light'>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
})

describe('Detail.Title', function () {
  it('should render a snapshot', function () {
    const { container } = render(<Title secondary='Halifax' primary='Calderdale, United Kingdom' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
