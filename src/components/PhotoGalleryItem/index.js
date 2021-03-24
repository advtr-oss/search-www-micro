/**
 * PhotoGalleryItem.js
 *
 * Image loader and wrapper for any images about a location
 * should load the image and hide the glow skeleton on load
 *
 * */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Wrapper from './Wrapper'

const PhotoGalleryItem = (props) => {
  const {
    src,
    alt,
    color,
    onLoad,
    ...rest
  } = props

  const [loaded, setLoaded] = useState(false)

  // Do this so we can at least show something lmao
  const handleLoad = (event) => {
    setLoaded(true)
    if (onLoad) onLoad(event)
  }

  // Probably a cleaner way but will work
  return (
    <Wrapper className='photo-gallery--item' color={color}>
      <img className={clsx(!loaded ? 'display-none' : null)} onLoad={handleLoad} src={src} alt={alt} {...rest} />
      <span className={clsx('photo-gallery--item-background', loaded ? 'display-none' : null)} />
    </Wrapper>
  )
}

PhotoGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onLoad: PropTypes.func
}

export default PhotoGalleryItem
