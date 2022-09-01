import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

import { Item } from '../Item'

const Mosaic = ({ photos }) => {
  return (
    <Wrapper count={photos.length}>
      {photos.map(el => (
        <Item key={el.id} defaultWidth={window.innerWidth / 5} {...el} />
      ))}
    </Wrapper>
  )
}

Mosaic.displayName = 'PhotoGallery.Mosaic'

Mosaic.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    ...Item.propTypes
  }))
}

export { Mosaic }
