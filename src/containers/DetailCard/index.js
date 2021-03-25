import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
// import { useMediaQuery } from 'react-responsive'

import { DetailView } from '../DetailView'

import useTracking from '../../hooks/useTracking'
import useTheme from '../../hooks/useTheme'

const DetailCard = () => {
  const { trackGoogleAnalyticsEvent } = useTracking()
  const { main: { sizes: breakpoints } } = useTheme()

  useEffect(() => {
    trackGoogleAnalyticsEvent('detail card viewed')
    trackGoogleAnalyticsEvent(breakpoints)
  })

  return (
    <DetailView />
  )
}

export default DetailCard
