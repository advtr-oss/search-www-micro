import React from 'react'
import { media, get } from '@advtr/tidy'
import styled from 'styled-components'

import { Mosaic } from './index'

import data from '../../../../mock/photos/[200].json'

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
  title: 'PhotoGallery/Mosaic',
  component: Mosaic,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    )
  ]
}

export const Default = {
  render: (args) => <Mosaic {...args} />,
  args: {
    photos: data.results,
    isLoading: false
  }
}
