import React, { useState, useEffect } from 'react'

import Wrapper from './Wrapper'
import HeaderSection from '../DetailCard/Sections/Header'
import PhotoSection from '../DetailCard/Sections/Photo'
import ShareSection from '../DetailCard/Sections/Share'

/**
 * Wrapper
 *  Modal
 *    Header
 *    Photo
 *    Share
 *
 * */
const DetailCardModal = () => {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    document.onclick = (event) => {
      if (event.target.id !== 'detail-card--modal') {
        // setHidden(true)
      }
    }
  })

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%'
    }}
    >
      <Wrapper id='detail-card--modal' hidden={hidden} onClick={() => hidden ? setHidden(false) : null} style={{ overflow: 'hidden' }}>
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <HeaderSection />
          {hidden
            ? null
            : (
              <>
                <PhotoSection title='leeds,england' />
                <ShareSection />
              </>
              )}
        </div>
      </Wrapper>
    </div>
  )
}

export default DetailCardModal
