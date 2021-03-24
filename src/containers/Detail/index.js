/**
 * Grouping of the cards, may not be important but will be okay for now
 * */

import React, { } from 'react'
// import PropTypes from 'prop-types'

import SearchCard from '../SearchCard'
import DetailCard from '../DetailCard'
import DetailCardModal from '../DetailCardModal'

import useDeviceState from '../../hooks/useDevice'

const Detail = () => {
  const { isMobile } = useDeviceState()

  return (
    <>
      <SearchCard />
      {isMobile ? <DetailCardModal /> : <DetailCard />}
    </>
  )
}

Detail.propTypes = {

}

export default Detail
