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

import Wrapper from './Wrapper'
import { GlowIcon, GlowText } from './components'

const Loading = (props) => (
  <Wrapper className={clsx(props.className, 'loading-item')}>
    <GlowIcon />
    <span>
      <GlowText primary>
        {props.value}
      </GlowText>
    </span>
  </Wrapper>
)

Loading.displayName = 'Search.Dropdown.Loading'

Loading.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string
}

export { Loading }
