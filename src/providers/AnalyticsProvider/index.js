/**
 * This will hold the local/custom analytics
 * */

import React from 'react'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'

import AnalyticsContext from '../../contexts/AnalyticsContext'

const AnalyticsProvider = ({ children, trackAdvtrAnalyticsEvent }) => {
  const track = (method, action, options) => {
    ReactGA[method]({
      ...options,
      action
    })
  }

  return (
    <AnalyticsContext.Provider value={{ trackAdvtrAnalyticsEvent, trackGoogleAnalyticsEvent: track }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

AnalyticsProvider.defaultProps = {
  trackAdvtrAnalyticsEvent: () => {}
}

AnalyticsProvider.propTypes = {
  trackAdvtrAnalyticsEvent: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default AnalyticsProvider
