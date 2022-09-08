import React from 'react'
import styled from 'styled-components'
import { get, media } from '@advtr/tidy'

import { Card } from './index'

import data from '../../../../mock/geolocation/[place]/[200].json'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  
  background-color: ${get('elements.canvas.overlay')};
  
  ${media('small')} {
    width: 420px;
  }
`

export default {
  title: 'Detail/Card',
  component: Card,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    )
  ]
}

export const Default = {
  render: (args) => <Card key={args.placeid} {...args} />,
  args: {
    ...data.result
  }
}
