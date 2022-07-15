import React from 'react'
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'

import { Dropdown } from './index'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    onSelect: action('select')
  }
}

// Place inside div to set width/height
const Template = (args) => (
  <div style={{ width: '420px', padding: '20px' }}>
    <Dropdown {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  values: [
    'Hello',
    'World'
  ]
}

export const Custom = Template.bind({})

const CustomComponent = ({ value }) => (
  <span style={{ color: 'red' }}>{value}</span>
)

CustomComponent.propTypes = {
  value: PropTypes.string.isRequired
}

Custom.args = {
  values: [
    'Hello',
    'World'
  ],
  component: CustomComponent
}

export const ComplexCustom = Template.bind({})

const ComplexCustomComponent = ({ value, color }) => (
  <span style={{ color }}>{value}</span>
)

ComplexCustomComponent.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

ComplexCustom.args = {
  values: [
    {
      value: 'Hello',
      color: 'red'
    },
    {
      value: 'World',
      color: 'green'
    }
  ],
  component: ComplexCustomComponent
}
