/**
 * Map details, could be a context rather than an empty component
 *
 * TODO: Figure what the fuck this should do
 *
 * So far this just handles the ma geolocation data, getting the users location
 *
 * */
import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import MapContext from '../../contexts/MapContext'
import where from '../../utils/where'

function MapProvider ({ children }) {
  const [map, setMap] = useState(undefined)

  const locationToCoords = (point) => {
    return [point.lat, point.lon ? point.lon : point.lng]
  }

  const handleSetPosition = useCallback((position) => {
    // Previously would use IP to find bias the results but may use
    // this for now too, probably better to move this to redux and have
    // this as a middleman
    window.localStorage.setItem('mapPosition', JSON.stringify({ ...position, expires: 60 * 60 * 24 * 7 }))
  }, [])

  const onMove = useCallback(() => {
    const position = map && map.getCenter()
    handleSetPosition(position)
  }, [map])

  const handlePositionSet = useCallback((position) => {
    map && map.setView(locationToCoords(position), 13)
    handleSetPosition(position)
  }, [map])

  const handleMapSet = useCallback((map) => {
    setMap(map)
  }, [setMap])

  useEffect(() => {
    let previousPosition = null

    // We should save from the last visited position
    if (window && window.sessionStorage.getItem('lastVisited')) {
      previousPosition = JSON.parse(window.sessionStorage.getItem('lastVisited'))
      handlePositionSet(previousPosition)
    } else if (window && window.localStorage.getItem('mapPosition')) {
      // Or we should get the position here
      previousPosition = JSON.parse(window.localStorage.getItem('mapPosition'))
      handlePositionSet(previousPosition)
    }

    // Get the users location to help bias results, this is not saved anywhere except in
    // the users browser
    where().then(info => {
      if (!previousPosition) handlePositionSet(info.location)
      window && window.localStorage.setItem('requestInfo', JSON.stringify(info))
    }).catch(console.error)
  }, [handlePositionSet])

  useEffect(() => {
    map && map.on('move', onMove)
    return () => {
      map && map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <MapContext.Provider value={{
      setMap: handleMapSet
    }}
    >
      {children}
    </MapContext.Provider>
  )
}

MapProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default MapProvider
