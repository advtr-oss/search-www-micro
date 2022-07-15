import React from 'react'

import { action } from '@storybook/addon-actions'

import ADVThemeSwitch from './index'

export default {
  title: 'Switch/Theme',
  component: ADVThemeSwitch
}

export const ThemeSwitch = () => <ADVThemeSwitch onClick={action('change-theme')} />
