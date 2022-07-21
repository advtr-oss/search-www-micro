import React from 'react'

import View from './index'

export default {
  title: 'Search/View',
  component: View
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
    <View />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
