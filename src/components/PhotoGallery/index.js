/**
 * PhotoGallery.js
 *
 * For phones the layout changes rather than this being
 * the header for it becomes a section bellow the title,
 * and details but before the share options.
 *
 * Might be more generic in the future but will work for
 * what I needed it to
 * */
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'

import Grid from "./Grid";
import Wrapper from "./Wrapper";

import Glow from "../Glow";
import PhotoGalleryItem from "../PhotoGalleryItem";

// Will be replaced by a map
const Item = ({ src, alt, color }) => (
  <li>
    <PhotoGalleryItem src={src} alt={alt} color={color} />
  </li>
)

// Could go in its own component maybe ??
const LoadingItem = () => (
  <li>
    <div className='photo-gallery--item-loading'>
      <Glow className='glow' />
    </div>
  </li>
)

/**
 * Should be responsive based on the amount of photos returned maybe
 * be similar to the ones in AppleMaps
 * */
const PhotoGallery = (props) => {
  const {
    loading,
    photos
  } = props

  // Fake loading
  //
  // Hold it here since its a component not a container
  // so it should not do any networking
  if (loading) {
    return (
      <Wrapper>
        <Grid>
          {Array(8).fill(null).map((_, idx) => <LoadingItem key={idx} />)}
        </Grid>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Grid>
        {photos.map((el, idx) => <Item key={idx} {...el} />)}
      </Grid>
      <span className='watermark'>Photos provided by Unsplash</span>
    </Wrapper>
  )
}

PhotoGallery.defaultProps = {
  loading: true
}

// Add any extra here
PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  })),
  loading: PropTypes.bool
}

export default PhotoGallery
