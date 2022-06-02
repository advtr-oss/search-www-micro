import React from 'react'

import { action } from '@storybook/addon-actions'

import ADVThemeSwitch from './index'

export default {
  title: 'UI/ThemeSwitch',
  component: ADVThemeSwitch
}

export const ThemeSwitch = () => <ADVThemeSwitch onClick={action('change-theme')} />
