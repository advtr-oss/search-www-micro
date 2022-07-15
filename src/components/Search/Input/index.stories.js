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

const Template = (args) => {
  const ref = createRef()
  return <Input ref={ref} {...args} />
}

export const Default = Template.bind({})
Default.args = {}
