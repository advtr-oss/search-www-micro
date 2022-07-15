import React, { createRef } from 'react'

import { action } from '@storybook/addon-actions'

import { Input } from './index'

export default {
  title: 'Search/Input',
  component: Input,

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

const style = {
  width: '420px',
  padding: '20px',
  overflowY: 'auto',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0
}

const Template = (args) => {
  const ref = createRef()
  return (
    <div style={style}>
      <div style={{ position: 'relative' }}>
        <Input ref={ref} {...args} />
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
