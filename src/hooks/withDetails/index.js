/* eslint-disable */

/**
 *
 * Wrap the component with poi and data retrieval, saves it being
 * written multiple times in DetailCard
 *
 * Saves me writing it twice, should work
 * */

import React, { useMemo }  from 'react'
import { connect } from 'react-redux'

// Saves typing all this
const where = (array, predicate) => array[array.findIndex(predicate)]

// Just create a simple list where keys include array[x].type
const flatten = (array, keys) =>
  keys.filter((key) => where(array, (el) => el.type === key))
    .map((key) => where(array, (el) => el.type === key).name)
    .join(', ')

const mapStateToProps = state => ({
  poi: state.searchCard.selected
})

export default function withDetail (WrappedComponent) {
  return connect(mapStateToProps)(({ poi, ...rest }) => {
    const createTitle = useMemo(() => {
      if (poi.loading) return ''
      return `${poi.name},${where(poi.geoContainers, (el) => el.type === 'Country').name}`
    }, [poi])

    const createSecondary = useMemo(() => {
      if (poi.loading) return ''
      return flatten(poi.geoContainers, ['FirstLevelNationAdministrativeDivision', 'Country'])
    }, [poi])

    // No point showing anything lmao
    if (poi.loading) return null

    return <WrappedComponent photoQuery={createTitle} primary={poi.name} secondary={createSecondary} placeid={poi.placeid} {...rest} />
  })
}
