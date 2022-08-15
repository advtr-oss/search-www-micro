import React from 'react'
import { action } from '@storybook/addon-actions'

import { Card } from './index'

const style = {
  width: '420px',
  padding: '20px',
  overflowY: 'auto',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0
}

export default {
  title: 'Search/Card',
  component: Card,
  args: {
    onSelectionChange: action('select')
  },
  decorators: [
    (Story) => (
      <div style={style}>
        <div style={{ position: 'relative' }}>
          <Story />
        </div>
      </div>
    )
  ]
}

export const Default = {
  render: (args) => <Card {...args} />
}
