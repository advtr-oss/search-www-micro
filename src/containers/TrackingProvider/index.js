/**
 * This could be better maybe??
 * */
import React from 'react'
import PropTypes from 'prop-types'

import TrackingContext from '../../contexts/TrackingContext'

const TrackingProvider = ({ children }) => {
  const track = (...rest) => {
    console.log(rest)
  }

  return (
    <TrackingContext.Provider value={{ trackGoogleAnalyticsEvent: track }}>
      {children}
    </TrackingContext.Provider>
  )
}

TrackingProvider.propTypes = {
  children: PropTypes.node
}

export default TrackingProvider
