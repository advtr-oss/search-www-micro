/**
 * Map view, this should be heavily linked with redux and update when we get a
 * new marker, with plans for GeoJSON in the future
 * */
import React, { useState, useMemo }  from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { MapContainer, TileLayer, ZoomControl, FeatureGroup, Marker, useMap } from 'react-leaflet'

import MapProvider from "../MapProvider";

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

// Workaround for now
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const MapView = ({ darkMode, selected }) => {
  const layer = darkMode ? layers.dark : layers.light

  const locationToCoords = (point) => {
    return [point.lat, point.lon]
  }

  const centre = !!selected.location ? locationToCoords(selected.location) : [51.505, -0.09]

  return (
    <MapContainer center={centre} zoom={13} scrollWheelZoom={false} zoomControl={false}>
      <ChangeView center={centre} zoom={13} />
      <TileLayer {...layer} />
      <ZoomControl position="bottomright" />
      <FeatureGroup>
        {selected.location && <Marker position={locationToCoords(selected.location)} />}
      </FeatureGroup>
    </MapContainer>
  )
}

MapView.propTypes = {
  darkMode: PropTypes.bool,
  poi: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number,
      lon: PropTypes.number
    })
  }),
}

/**
 * Handle any redux, for now we only need the theme so we can get the right
 * tiles from stadia
 *
 * So can just be basic redux for now
 * */
const mapStateToProps = ({ theme, searchCard }) => ({ ...theme, ...searchCard })

export default connect(mapStateToProps)(MapView)
