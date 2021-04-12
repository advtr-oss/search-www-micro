// TODO: Fix this

import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
// import { Helmet } from 'react-helmet'

import Wrapper from './Wrapper'
import Content from './Content'

import { PhotoSection, HeaderSection/*, ShareSection */, propTypes, POIView } from '../Shared'

import withDetail from '../../../hooks/withDetails'
import useTracking from '../../../hooks/useTracking'
import { ADVTR_DETAIL_DISPLAYED_MODAL, ADVTR_DETAIL_DISPLAYED_MODAL_OPENED, ADVTR_DETAIL_DISPLAYED_MODAL_CLOSED, ADVTR_DETAIL_EVENT } from '../../../utils/analyticsConstants'

const DetailModalView = ({ photoQuery, primary, secondary, placeid, isOpen }) => {
  const ref = useRef()
  const [open, setOpen] = useState(isOpen)

  const { trackGoogleAnalyticsEvent } = useTracking()

  useEffect(() => {
    trackGoogleAnalyticsEvent('event', ADVTR_DETAIL_DISPLAYED_MODAL, {
      category: ADVTR_DETAIL_EVENT,
      label: 'detail',
      value: window.innerWidth
    })
  }, [])

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target) && open) {
        setOpen(false)

        trackGoogleAnalyticsEvent('event', ADVTR_DETAIL_DISPLAYED_MODAL_CLOSED, {
          category: ADVTR_DETAIL_EVENT,
          label: 'detail'
        })
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [setOpen, open, isOpen])

  const handleClick = useCallback((event) => {
    if (ref.current && ref.current.contains(event.target) && !open) {
      setOpen(true)

      trackGoogleAnalyticsEvent('event', ADVTR_DETAIL_DISPLAYED_MODAL_OPENED, {
        category: ADVTR_DETAIL_EVENT,
        label: 'detail'
      })
    }
  }, [open, isOpen])

  return (
    <Wrapper>
      <Content id='detail-card--modal' open={open} onClick={handleClick} ref={ref} style={{ overflow: 'hidden' }}>
        <POIView>
          <HeaderSection primary={primary} secondary={secondary} />
          {open && (
            <>
              <PhotoSection query={photoQuery} />
              {/* <ShareSection id={placeid} /> */}
            </>
          )}
        </POIView>
      </Content>
    </Wrapper>
  )
}

DetailModalView.defaultProps = {
  isOpen: false
}

DetailModalView.propTypes = {
  ...propTypes,
  isOpen: PropTypes.bool
}

export default withDetail(DetailModalView)
