/**
 * @jest-environment jsdom
 */

import React from 'react'
import user from '@testing-library/user-event'
import { GlobalStyle, ThemeProvider } from '@advtr/tidy'
import { render as rtlRender, act } from '@testing-library/react'

import { Wikipedia } from '../index'

import AnalyticsProvider from '../../../providers/AnalyticsProvider'

const data = {
  title: 'Pomology',
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

  it('should report on click', async function () {
    const handleClick = jest.fn()

    const { getByText } = render(
      <AnalyticsProvider trackAdvtrAnalyticsEvent={handleClick}>
        <Wikipedia embed {...data} />
      </AnalyticsProvider>
    )

    const button = getByText('Report False Data')
    await act(async () => {
      await user.click(button)
    })

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
