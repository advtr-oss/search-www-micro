import React from 'react'
import PropTypes from 'prop-types'

import { usePhotoFetch } from './hooks'

import { Section } from '../Section'

import { PhotoGallery } from '../../../PhotoGallery'

const PhotoSection = ({ name, geoContainers }) => {
  const [photos, error, isLoading] = usePhotoFetch(name, geoContainers)

  if (error) {
    console.error(error)
    return null
  }

  return (
    !isLoading && (<Section className='section--photo' render={() => <PhotoGallery photos={photos} />} />)
  )
}

PhotoSection.displayName = `${Section.displayName}(Photo)`

PhotoSection.propTypes = {
  name: PropTypes.string.isRequired,
  geoContainers: PropTypes.arrayOf(PropTypes.object).isRequired
}

export { PhotoSection }
