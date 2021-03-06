/**
 * SearchDropdownItem.js
 *
 * The main li for the search dropdown, takes
 * the required object and generates itself
 *
 * */

// import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'
import { Primary, Secondary } from './components'
import FeatherIcon from '../Icons/Feather'

const IconTypes = PropTypes.oneOf([
  'city',
  'cafe',
  'airport'
])

// Wrapper
const Icon = ({ type }) => {
  switch (type) {
    case 'cafe':
      return <FeatherIcon type='coffee' />
    case 'airport':
      return <FeatherIcon type='send' />
    case 'city':
    default:
      return <FeatherIcon type='pin' />
  }
}

Icon.propTypes = {
  type: IconTypes
}

const SearchDropdownItem = (props) => {
  const primary = props.containers.entity.value
  const secondary = props.containers.nation ? props.containers.nation.value : primary
  return (
    <Item>
      <Icon className='search-icon' type={props.type.toLowerCase()} />
      <span>
        <Primary>{primary}</Primary>
        <Secondary>{secondary}</Secondary>
      </span>
    </Item>
  )
}

SearchDropdownItem.propTypes = {
  type: IconTypes,
  containers: PropTypes.shape({
    entity: PropTypes.object,
    nation: PropTypes.object
  })
}

export default SearchDropdownItem
