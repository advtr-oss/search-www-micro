/**
 *
 * Search/Input.js
 *
 * The wrapper for the @advtr/tidy/Input
 *
 * */

// Have this here as decorator fails eslint/prop-types
/* eslint-disable react/prop-types */

import React, { forwardRef, useEffect, useState, useCallback, useMemo } from 'react'

import { X, Search as Magnifier } from 'react-feather'
import { Search, decorator, withFocusEvents, withTextInputBase, withValueBase, withInputBase, withAriaLabelingProps } from '@advtr/tidy'
import Wrapper from './Wrapper'

const Input = forwardRef((props, ref) => {
  const {
    value,

    onChange,

    ...rest
  } = props

  const [isShowingSearch, setShowingSearch] = useState(!value || value === '')

  // Hide the icon on clear
  useEffect(() => {
    setShowingSearch(!value || value === '')
  }, [value])

  const handleChange = useCallback((event) => {
    onChange && onChange(event)
    setShowingSearch(event.target.value === '')
  }, [onChange])

  const [Icon, side] = useMemo(() => [isShowingSearch ? Magnifier : X, isShowingSearch ? 'left' : 'right'], [isShowingSearch])

  return (
    <Wrapper className='search--input'>
      <Search adv={{ canvas: 'overlay', shadow: 'medium' }} value={value} ref={ref} Icon={Icon}
              onChange={handleChange} side={side} {...rest} />
    </Wrapper>
  )
})

Input.displayName = 'Search.Input'

Input.defaultProps = {
  'aria-label': 'Search autocomplete',
  placeholder: 'Search the world...'
}

Input.propTypes = decorator([
  withInputBase,
  [withValueBase, ['defaultValue']],
  withFocusEvents,
  withTextInputBase,
  withAriaLabelingProps
])

export { Input }
