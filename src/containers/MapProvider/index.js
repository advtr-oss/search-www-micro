/**
 * Map details, could be a context rather than an empty component
 *
 * TODO: Figure what the fuck this should do
 *
 * */
import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import MapContext from "../../contexts/MapContext";

function MapProvider({ map, push, children }) {
  const [position, setPosition] = useState(map ? map.getCenter() : { lat: 0, lng: 0 } )

  const onMove = useCallback(() => {
    setPosition(map.getCenter())

    // Previously would use IP to find bias the results but may use
    // this for now too, probably better to move this to redux and have
    // this as a middleman
    window.localStorage.setItem('mapPosition', JSON.stringify({ ...position, expires: 60 * 60 * 24 * 7 }))
    // May look at something here
    // push(`/maps/@${position.lat},${position.lng}`)
  }, [map, position])

  useEffect(() => {
    map && map.on('move', onMove)
    return () => {
      map &&  map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <MapContext.Provider value={position}>
      {children}
    </MapContext.Provider>
  )
}

/**
 * Handle any redux, for now we only need the theme so we can get the right
 * tiles from stadia
 *
 * So can just be basic redux for now
 * */
const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})

export default connect(mapStateToProps, { push })(MapProvider)
