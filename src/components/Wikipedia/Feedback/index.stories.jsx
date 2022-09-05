import React from 'react'
import { action } from '@storybook/addon-actions'

import { Feedback } from './index'

import AnalyticsProvider from '../../../providers/AnalyticsProvider'

export default {
  title: 'Wikipedia/Feedback',
  component: Feedback,
  decorators: [
    (Story) => (
      <AnalyticsProvider trackAdvtrAnalyticsEvent={action('trackAdvtrAnalyticsEvent')}>
        <Story />
      </AnalyticsProvider>
    )
  ]
}

export const Default = {
  render: (args) => <Feedback {...args} />,
  args: {
    ping: 'RNG',
    onClick: action('on-click')
  }
}
