/**
 * The main part of the Detail tree, this is here to determine if we're on mobile or anything else to
 * display the correct view, should handle any analytics while it's here too
 * */

import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { DetailView, DetailModalView } from '../DetailView'

import useTheme from '../../hooks/useTheme'
import useTracking from '../../hooks/useTracking'
import { ADVTR_DETAIL_EVENT, ADVTR_DETAIL_DISPLAYED } from '../../utils/analyticsConstants'

const breakpointToNumber = (bp) => parseInt(bp.replace('px', ''))

const DetailCard = () => {
  const { trackGoogleAnalyticsEvent } = useTracking()
  const { main: { sizes: { breakpoints } } } = useTheme()

  const isMobile = useMediaQuery({ maxWidth: breakpointToNumber(breakpoints.sm) })

  useEffect(() => {
    trackGoogleAnalyticsEvent('event', ADVTR_DETAIL_DISPLAYED, {
      category: ADVTR_DETAIL_EVENT,
      label: 'detail',
      value: window.innerWidth
    })
  })

  return isMobile ? <DetailModalView /> : <DetailView />
}

export default DetailCard
