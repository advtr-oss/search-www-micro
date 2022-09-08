import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { parseGeoContainers } from './utils'

import Wrapper from "./Wrapper";

import { Section } from './Section'
import { WikiSection } from "./WikiSection"
import { PhotoSection } from './PhotoSection'

import { Title } from '../Title'

const Card = ({ name, geoContainers, ...rest }) => {
  const secondary = useMemo(() => {
    const [, level2, , country] = parseGeoContainers({ name, geoContainers })
    return [level2, country].join(', ')
  }, [name, geoContainers])

  return (
    <Wrapper>
      <Section render={() => <Title secondary={secondary} primary={name} />} />
      <WikiSection name={name} geoContainers={geoContainers} />
      <PhotoSection name={name} geoContainers={geoContainers} />
    </Wrapper>
  )
}

const GeoContainerProps = {
  _id: PropTypes.string,
  name: PropTypes.string,
  placeid: PropTypes.string,
  type: PropTypes.oneOf(['City', 'SecondLevelNationAdministrativeDivision', 'FirstLevelNationAdministrativeDivision', 'Country'])
}

Card.propTypes = {
  ...GeoContainerProps,

  geometry: PropTypes.object,
  geoContainers: PropTypes.arrayOf(PropTypes.shape(GeoContainerProps))
}

export { Card }
