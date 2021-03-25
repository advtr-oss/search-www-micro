import React, { useState, useEffect } from 'react'

import Wrapper from './Wrapper'

import { PhotoSection, HeaderSection, ShareSection, propTypes, POIView } from '../Shared'

import withDetail from '../../../hooks/withDetails'
import Content from './Content'

const DetailModalView = ({ photoQuery, primary, secondary, placeid }) => {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    console.log('modal')
  }, [])

  return (
    <Wrapper>
      <Content id='detail-card--modal' hidden={hidden} onClick={() => hidden ? setHidden(false) : null} style={{ overflow: 'hidden' }}>
        <POIView>
          <HeaderSection primary={primary} secondary={secondary} />
          {!hidden && (
            <>
              <PhotoSection title={photoQuery} />
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
