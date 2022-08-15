import React, { createRef } from 'react'

import { Input } from './index'

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
  title: 'Search/Input',
  component: Input,
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

const Template = ({ ...args }) => {
  const ref = createRef()
  return <Input ref={ref} {...args} />
}

Template.displayName = Input.displayName

export const Default = {
  render: (args) => <Template {...args} />
}

export const Disabled = {
  render: (args) => <Template {...args} />,
  args: {
    isDisabled: true
  }
}
