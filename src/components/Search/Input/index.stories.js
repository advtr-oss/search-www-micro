import React, { createRef } from 'react'

import { action } from '@storybook/addon-actions'

import { Input as Ipt } from './index'

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
  component: Ipt,
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

const Input = ({ ...args }) => {
  const ref = createRef()
  return <Ipt ref={ref} {...args} />
}

Input.displayName = Ipt.displayName

export const Default = {
  render: (args) => <Input {...args} />,
  args: {
    onBlur: action('on-blur'),
    onFocus: action('on-focus'),
    onInput: action('on-input'),
    onClear: action('on-click'),

    // Default args that aren't buttons
    placeholder: 'Hello',
    disabled: false
  }
}
