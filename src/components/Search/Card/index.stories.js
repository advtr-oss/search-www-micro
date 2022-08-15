import React from 'react'
import { media } from '@advtr/tidy'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'

import { Card } from './index'

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
  title: 'Search/Card',
  component: Card,
  args: {
    onSelectionChange: action('select')
  },
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
  render: (args) => <Card {...args} />
}
