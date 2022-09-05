import React from 'react'
import styled from 'styled-components'
import { get, media } from "@advtr/tidy";

import { Title } from './index'


const Wrapper = styled.div`
  width: 100%;
  height: auto;

  padding: 8px;
  
  background-color: ${get('elements.canvas.overlay')};
  
  ${media('small')} {
    width: 420px;
    padding: 16px;
  }
`

export default {
  title: 'Section/Title',
  component: Title,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    )
  ]
}

export const Default = {
  render: (args) => <Title {...args} />,
  args: {
    primary: 'Halifax',
    secondary: 'Calderdale, United Kingdom'
  }
}
