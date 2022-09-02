import React from 'react'
import styled from 'styled-components'
import { media, get } from '@advtr/tidy'
import { Wikipedia } from './index'

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
  title: 'Wikipedia',
  component: Wikipedia,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    )
  ]
}

export const Default = {
  render: (args) => <Wikipedia {...args} />,
  args: {
    embed: true,

    extract: 'Pomology is a branch of botany that studies and cultivates fruit. The denomination fruticulture introduced from Romance languages is also used.',
    extract_html: '<p><b>Pomology</b> is a branch of botany that studies and cultivates fruit. The denomination <b>fruticulture</b> introduced from Romance languages is also used.</p>'
  }
}
