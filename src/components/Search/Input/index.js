/**
 *
 * Search/Input.js
 *
 * The wrapper for the @advtr/tidy/Input
 *
 * */

import React, { forwardRef, useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { X } from 'react-feather'
import { Input as ADVInput } from '@advtr/tidy'
import Wrapper from './Wrapper'

const Input = forwardRef((
  {
    value,
    onClear,
    onInput,
    onFocus,
    onBlur,
    placeholder,
    disabled,
    ...props
  }, ref
) => {
  // Hide the search icon
  const [hidden, setHidden] = useState(!value || value === '')

  // Hide the icon on clear
  useEffect(() => {
    setHidden(!value || value === '')
  }, [value])

  // Update the hidden icon
  const handleInput = useCallback((event) => {
    setHidden(!event.target.value)
    onInput && onInput(event)
  }, [onInput])

  return (
    <Wrapper>
      <ADVInput border={null} canvas={'overlay'} shadow={'medium'} ref={ref} value={value} onClick={onClear} onInput={handleInput}
                onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} Icon={X} hide={hidden} side={'right'}
                disabled={disabled} listener={false} aria-label='Search autocomplete' />
    </Wrapper>
  )
})

Input.displayName = 'Search.Input'

Input.propTypes = {
  value: PropTypes.string,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,

  disabled: PropTypes.bool
}

export { Input }
