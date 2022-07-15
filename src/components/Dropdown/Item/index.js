/**
 * Standard Dropdown.Item
 * */

import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const Item = (props) => (
  <Wrapper>
    {props.value}
  </Wrapper>
)

Item.propTypes = {
  value: PropTypes.string
}

export { Item }
