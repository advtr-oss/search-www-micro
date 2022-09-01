import React from 'react'

import Wrapper from './Wrapper'
import { Watermark } from './components'

import { Mosaic } from './Mosaic'

const PhotoGallery = ({ photos }) => {
  return (
    <Wrapper>
      <Mosaic photos={photos} />
      <Watermark>Photos provided by <a href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</a></Watermark>
    </Wrapper>
  )
}

PhotoGallery.propTypes = Mosaic.propTypes

export { PhotoGallery }
