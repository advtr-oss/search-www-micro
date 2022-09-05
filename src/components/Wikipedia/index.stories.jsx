import React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import { media, get } from '@advtr/tidy'
import { action } from '@storybook/addon-actions'

import { Wikipedia } from './index'

import AnalyticsProvider from '../../providers/AnalyticsProvider'

ReactGA.initialize('foo', { testMode: true })

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  padding: 8px;
  
  background-color: ${get('elements.canvas.overlay')};
  
  ${media('small')} {
    width: 420px;
    padding: 16px;
  }
`

export default {
  title: 'Wikipedia',
  component: Wikipedia,
  decorators: [
    (Story) => (
      <AnalyticsProvider trackAdvtrAnalyticsEvent={action('trackAdvtrAnalyticsEvent')}>
        <Wrapper>
          <Story />
        </Wrapper>
      </AnalyticsProvider>
    )
  ]
}

export const Default = {
  render: (args) => <Wikipedia {...args} />,
  args: {
    embed: true,
    title: 'Pomology',

    extract: 'Pomology is a branch of botany that studies and cultivates fruit. The denomination fruticulture introduced from Romance languages is also used.',
    extract_html: '<p><b>Pomology</b> is a branch of botany that studies and cultivates fruit. The denomination <b>fruticulture</b> introduced from Romance languages is also used.</p>'
  }
}
