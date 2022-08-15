import { media } from '@advtr/tidy'
import styled from 'styled-components'
import React, { createRef } from 'react'

import { Input } from './index'

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
  title: 'Search/Input',
  component: Input,
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

const Template = ({ ...args }) => {
  const ref = createRef()
  return <Input ref={ref} {...args} />
}

Template.displayName = Input.displayName

export const Default = {
  render: (args) => <Template {...args} />
}

export const Disabled = {
  render: (args) => <Template {...args} />,
  args: {
    isDisabled: true
  }
}
