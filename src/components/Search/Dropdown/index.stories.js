import React from 'react'
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
  title: 'Search/Dropdown',
  component: Dropdown,
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
  render: (args) => <Dropdown {...args}/>,
  args: {
    onSelectionChange: action('onSelectionChange'),
    values: mockData
  }
}

export const Loading = {
  render: (args) => <Dropdown {...args}/>,
  args: {
    ...Default.args,
    values: [],
    isLoading: true
  }
}

//
// // Place inside div to set width/height
// const Template = (args) => <Dropdown {...args} />
//
// export const Default = Template.bind({})
//
// Default.args = {
//   values: mockData
// }
//
// export const Loading = Template.bind({})
// Loading.args = {
//   loading: true,
//   values: []
// }
