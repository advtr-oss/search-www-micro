/**
 * This could be better maybe??
 * */
import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import TrackingContext from '../../contexts/TrackingContext'

const TrackingProvider = ({ children }) => {
  const track = (method, action, options) => {
    ReactGA[method]({
      ...options,
      action
    })
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
