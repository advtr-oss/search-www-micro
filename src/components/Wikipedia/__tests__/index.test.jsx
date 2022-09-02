/**
 * @jest-environment jsdom
 */

import React from 'react'
import { GlobalStyle, ThemeProvider } from '@advtr/tidy'
import { render as rtlRender } from '@testing-library/react'

import { Wikipedia } from '../index'

const data = {
  extract: 'Pomology is a branch of botany that studies and cultivates fruit. The denomination fruticulture introduced from Romance languages is also used.',
  extract_html: '<p><b>Pomology</b> is a branch of botany that studies and cultivates fruit. The denomination <b>fruticulture</b> introduced from Romance languages is also used.</p>'
}

const render = (ui, opts) => rtlRender(ui, {
  wrapper: ({ children }) => (
    <ThemeProvider colorScheme='light'>
      <React.Fragment>
        <GlobalStyle />
        <React.Fragment>{children}</React.Fragment>
      </React.Fragment>
    </ThemeProvider>
  ),
  ...opts
})

describe('PhotoGallery', function () {
  it('should render snapshot', function () {
    const { container } = render(
      <Wikipedia embed {...data} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
