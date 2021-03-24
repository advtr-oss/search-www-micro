/**
 * Could maybe have this stateful not stateless
 * with the size rather than via a prop
 * */
import React from 'react'
import PropTypes from 'prop-types'

import useFetch from './hooks'

import Wrapper from './Wrapper'
import PhotoGallery from '../../../../components/PhotoGallery'

const PhotoSection = (props) => {
  const { error, isLoading, photos } = useFetch(props.title)

  // Show nothing
  if (error) return null

  return (
    <Wrapper>
      {photos.length > 0 ? (<h5>{photos.length} Photos</h5>) : null}
      <PhotoGallery photos={photos} loading={isLoading} />
    </Wrapper>
  )
}

PhotoSection.propTypes = {
  title: PropTypes.string.isRequired
}

export default PhotoSection
