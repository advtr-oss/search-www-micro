import React from 'react'

import Card from './index'

export default {
  title: 'Search/Card',
  component: Card,

  args: {
    // Default args that aren't buttons
    placeholder: 'Hello',
    disabled: false
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

const Template = (args) => (
  <div style={style}>
    <div style={{ position: 'relative' }}>
      <Card {...args} />
    </div>
  </div>
)

export const Default = Template.bind({})
Default.args = {}
