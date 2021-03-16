/**
 * LoadingDropdownItem.js
 *
 * Loading skeleton item for the dropdown
 * just to make it look nicer
 *
 * */

import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'
import { GlowIcon, GlowText } from './components'

const LoadingDropdownItem = (props) => (
  <Item className={clsx(props.className, 'loading-item')}>
    <GlowIcon />
    <span>
      <GlowText primary>
        {props.value}
      </GlowText>
    </span>
  </Item>
)

LoadingDropdownItem.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string
}

export default LoadingDropdownItem
