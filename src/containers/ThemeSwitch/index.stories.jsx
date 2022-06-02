import React from 'react'

import { action } from '@storybook/addon-actions'

import ThemeSwitch from './index'

export default {
  title: 'UI/ThemeSwitch',
  component: ThemeSwitch
}

export const Default = () => <ThemeSwitch onClick={action('change-theme')} />
