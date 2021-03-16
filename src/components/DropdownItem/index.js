/**
 * Standard DropdownItem
 * */

import React from 'react'
import PropTypes from 'prop-types'

import Item from './Wrapper'

const DropdownItem = (props) => (
  <Item>
    {props.value}
  </Item>
)

DropdownItem.propTypes = {
  value: PropTypes.string
}

export default DropdownItem
