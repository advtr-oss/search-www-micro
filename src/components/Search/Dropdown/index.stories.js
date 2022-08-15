import React from 'react'
import { media } from '@advtr/tidy'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'

import { Dropdown } from './index'

const mockData = [
  {
    type: 'city',
    containers: {
      entity: { value: 'Halifax' },
      nation: { value: 'United Kingdom' }
    }
  },
  {
    type: 'airport',
    containers: {
      entity: { value: 'Manchester Airport' },
      nation: { value: 'United Kingdom' }
    }
  }
]

const Wrapper = styled.div`
  width: 100%;
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  padding: 0;
  
  ${media('small')} {
    width: 420px;
    padding: 20px;
  }
`

export default {
  title: 'Search/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => (
      <Wrapper>
        <div style={{ position: 'relative' }}>
          <Story />
        </div>
      </Wrapper>
    )
  ]
}

export const Default = {
  render: (args) => <Dropdown {...args}/>,
  args: {
    onSelectionChange: action('onSelectionChange'),
    values: mockData
  }
}

export const Loading = {
  render: (args) => <Dropdown {...args}/>,
  args: {
    ...Default.args,
    values: [],
    isLoading: true
  }
}
