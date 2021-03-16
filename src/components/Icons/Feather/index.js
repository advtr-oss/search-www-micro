/**
 * Crude wrapper for feather
 *
 * Update when needed
 * */
import React from 'react'
import PropTypes from 'prop-types'

import { X, Search, Send, MapPin, Coffee, Menu, Facebook, Linkedin, Twitter } from 'react-feather'

const svg = (type) => {
  switch (type) {
    case 'send': return Send
    case 'coffee': return Coffee
    case 'pin': return MapPin
    case 'x': return X
    case 'search': return Search
    case 'menu': return Menu
    case 'facebook': return Facebook
    case 'linkedin': return Linkedin
    case 'twitter': return Twitter
  }
}

const FeatherIcon = (props) => {
  const {
    type,
    ...rest
  } = props

  const Icon = svg(type)
  return <Icon {...rest} />
}

FeatherIcon.propTypes = {
  type: PropTypes.oneOf([
    'x',
    'search',
    'send',
    'coffee',
    'facebook',
    'linkedin',
    'twitter',
    'menu',
    'pin'
  ]).isRequired
}

export default FeatherIcon
