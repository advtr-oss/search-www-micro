import React from 'react'

import Wrapper from './Wrapper'

import { PhotoSection, HeaderSection, ShareSection, propTypes, POIView } from '../Shared'

import withDetail from '../../../hooks/withDetails'

const DetailView = ({ photoQuery, primary, secondary, placeid }) => (
  <Wrapper>
    <POIView className='poi'>
      <PhotoSection query={photoQuery} />
      <HeaderSection primary={primary} secondary={secondary} />
      <ShareSection placeid={placeid} />
    </POIView>
  </Wrapper>
)

DetailView.propTypes = propTypes

export default withDetail(DetailView)
