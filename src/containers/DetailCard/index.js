import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import PhotoSection from './Sections/Photo'
import HeaderSection from './Sections/Header'
import ShareSection from './Sections/Share'

import withPOI from '../../hooks/withPoi'

// Saves typing all this
const where = (array, predicate) => array[array.findIndex(predicate)]

const DetailCard = ({ poi, ...rest }) => {
  const createTitle = () => {
    return `${poi.name},${where(poi.geoContainers, (el) => el.type === 'Country').name}`
  }

  const createSecondary = () => {
    return `${where(poi.geoContainers, (el) => el.type === 'FirstLevelNationAdministrativeDivision').name}, ${where(poi.geoContainers, (el) => el.type === 'Country').name}`
  }

  // No point showing anything lmao
  if (poi.loading) return null

  return (
    <Wrapper>
      <div className='poi' style={{ width: '100%', overflow: 'hidden' }}>
        <PhotoSection title={createTitle()} />
        <HeaderSection primary={poi.name} secondary={createSecondary()} />
        <ShareSection id={poi.placeid} />
      </div>
    </Wrapper>
  )
}

DetailCard.propTypes = {
  poi: PropTypes.shape({
    name: PropTypes.string,
    loading: PropTypes.bool,
    placeid: PropTypes.string,
    geoContainers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string
    }))
  })
}

export default withPOI(DetailCard)
