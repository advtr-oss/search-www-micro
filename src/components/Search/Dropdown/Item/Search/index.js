/**
 * SearchDropdownItem.js
 *
 * The main li for the search dropdown, takes
 * the required object and generates itself
 *
 * */

import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import { Primary, Secondary } from './components'
import { Coffee, Send, MapPin } from 'react-feather'

// Wrapper for the Icon
const Icon = ({ type }) => {
  switch (type) {
    case 'cafe':
      return <Coffee />
    case 'airport':
      return <Send />
    case 'city':
    default:
      return <MapPin />
  }
}

Icon.propTypes = {
  type: PropTypes.oneOf([
    'city',
    'cafe',
    'airport'
  ])
}

const Search = (props) => {
  const primary = props.containers.entity.value
  const secondary = props.containers.nation.value

  return (
    <Wrapper>
      <Icon className='search-icon' type={props.type} />
      <span>
        <Primary>{primary}</Primary>
        <Secondary>{secondary}</Secondary>
      </span>
    </Wrapper>
  )
}

Search.displayName = 'Search.Dropdown.Search'

Search.propTypes = {
  type: PropTypes.oneOf([
    'city',
    'cafe',
    'airport'
  ]),
  containers: PropTypes.shape({
    entity: PropTypes.object,
    nation: PropTypes.object
  })
}

export { Search }
