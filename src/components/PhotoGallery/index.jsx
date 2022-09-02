import React from 'react'

import Wrapper from './Wrapper'
import { Mosaic } from './Mosaic'
import { Watermark } from './components'
import { FormattedView } from './FormattedView'

import messages from './messages'

const PhotoGallery = ({ photos }) => {
  return (
    <Wrapper>
      <Mosaic photos={photos} />
      <FormattedView watermark={messages.watermark}>
        {({ watermark }) => (
          <Watermark>
            {watermark} <a href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</a>
          </Watermark>
        )}
      </FormattedView>
    </Wrapper>
  )
}

PhotoGallery.propTypes = Mosaic.propTypes

export { PhotoGallery }
