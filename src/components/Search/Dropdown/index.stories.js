import React from 'react'
// import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'

import { Dropdown } from './index'

const mockData = [
  {
    type: 'city',
    containers: {
      entity: { value: 'Halifax' },
      nation: { value: 'United Kingdom' }
    }
  },
  {
    type: 'airport',
    containers: {
      entity: { value: 'Manchester Airport' },
      nation: { value: 'United Kingdom' }
    }
  }
]

export default {
  title: 'Search/Dropdown',
  component: Dropdown,
  args: {
    onSelect: action('select')
  }
}

const style = {
  width: '420px',
  padding: '20px',
  overflowY: 'auto',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0
}

// Place inside div to set width/height
const Template = (args) => (
  <div style={style}>
    <div style={{ position: 'relative' }}>
      <Dropdown {...args} />
    </div>
  </div>
)

export const Default = Template.bind({})

Default.args = {
  values: mockData
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
  values: []
}
