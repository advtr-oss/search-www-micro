import React from 'react'

import { View } from './index'
import { LanguageSelect } from '../../../components/LanguageSelect'

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
  title: 'Search/View',
  component: View,
  decorators: [
    (Story) => (
      <>
        <div style={style}>
          <div style={{ position: 'relative' }}>
            <Story />
          </div>
        </div>
        <div style={{ position: 'absolute', right: '16px', top: '16px' }}>
          <LanguageSelect />
        </div>
      </>
    )
  ]
}

export const Default = {
  render: (args) => <View {...args} />
}

// const style = {
//   width: '420px',
//   padding: '20px',
//   overflowY: 'auto',
//   position: 'absolute',
//   left: 0,
//   bottom: 0,
//   top: 0
// }
//
// const Template = (args) => (
//   <div style={style}>
//     <View />
//   </div>
// )
//
// export const Default = Template.bind({})
// Default.args = {}
