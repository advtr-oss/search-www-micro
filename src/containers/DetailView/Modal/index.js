import React, { useState, useEffect } from 'react'

import Wrapper from './Wrapper'
import Content from './Content'

import { PhotoSection, HeaderSection, ShareSection, propTypes, POIView } from '../Shared'

import withDetail from '../../../hooks/withDetails'
import useTracking from '../../../hooks/useTracking'
import { ADVTR_DETAIL_DISPLAYED_MODAL, ADVTR_DETAIL_EVENT } from '../../../utils/analyticsConstants'

const DetailModalView = ({ photoQuery, primary, secondary, placeid }) => {
  const [hidden, setHidden] = useState(true)

  const { trackGoogleAnalyticsEvent } = useTracking()

  useEffect(() => {
    trackGoogleAnalyticsEvent('event', ADVTR_DETAIL_DISPLAYED_MODAL, {
      category: ADVTR_DETAIL_EVENT,
      label: 'detail',
      value: window.innerWidth
    })
  }, [])

  return (
    <Wrapper>
      <Content id='detail-card--modal' hidden={hidden} onClick={() => hidden ? setHidden(false) : null} style={{ overflow: 'hidden' }}>
        <POIView>
          <HeaderSection primary={primary} secondary={secondary} />
          {!hidden && (
            <>
              <PhotoSection query={photoQuery} />
              <ShareSection id={placeid} />
            </>
          )}
        </POIView>
      </Content>
    </Wrapper>
  )
}

DetailModalView.propTypes = propTypes

export default withDetail(DetailModalView)
