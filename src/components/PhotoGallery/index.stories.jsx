import React from 'react'
import { media, get } from '@advtr/tidy'
import styled from 'styled-components'

import { PhotoGallery } from './index'

import data from '../../../mock/photos/[200].json'

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
  title: 'PhotoGallery',
  component: PhotoGallery,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    )
  ]
}

export const Default = {
  render: (args) => <PhotoGallery {...args} />,
  args: {
    photos: data.results
  }
}
