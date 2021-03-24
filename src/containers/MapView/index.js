/**
 * Map view, this should be heavily linked with redux and update when we get a
 * new marker, with plans for GeoJSON in the future
 * */
import React, { } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, ZoomControl, FeatureGroup, Marker, useMap } from 'react-leaflet'

import useMapProvider from '../../hooks/useMapProvider'
import useDeviceState from '../../hooks/useDevice'

const layers = {
  dark: {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  },
  light: {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
  }
}

// Simple way to center the map, without the context doing any heavy lifting
const ChangeView = ({ center, zoom }) => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

const MapView = ({ darkMode, selected }) => {
  const { setMap } = useMapProvider()
  const { isMobile } = useDeviceState()

  const layer = darkMode ? layers.dark : layers.light

  // Could be handled on the server, maybe a query param
  const immutableReverse = (array) => {
    const temp = [...array]
    temp.reverse()
    return temp
  }

  const geoJSONToCoords = (location) => {
    return location.type === 'Point' && immutableReverse(location.coordinates)
  }

  return (
    <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={false} zoomControl={false} whenCreated={setMap}>
      {selected.geometry && <ChangeView center={geoJSONToCoords(selected.geometry.location)} zoom={13} />}
      <TileLayer {...layer} />
      {!isMobile && <ZoomControl position='bottomright' />}
      <FeatureGroup>
        {selected.geometry && <Marker position={geoJSONToCoords(selected.geometry.location)} />}
      </FeatureGroup>
    </MapContainer>
  )
}

MapView.propTypes = {
  darkMode: PropTypes.bool,
  selected: PropTypes.object
}

/**
 * Handle any redux, for now we only need the theme so we can get the right
 * tiles from stadia
 *
 * So can just be basic redux for now
 * */
const mapStateToProps = ({ theme, searchCard }) => ({ ...theme, ...searchCard })

export default connect(mapStateToProps)(MapView)
