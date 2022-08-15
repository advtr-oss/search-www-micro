/**
 * Search/View.js
 *
 * The main autocomplete system for the search
 *
 * */

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useAutocorrect } from '@advtr/tidy'
import { debounce, throttle } from 'throttle-debounce'
import React, { useState, useEffect, useCallback, useRef } from 'react'

import { setSelected, clearSelected } from './actions'

import Wrapper from './Wrapper'

import { Input } from '../Input'
import { Dropdown } from '../Dropdown'

import useBlur from '../../../hooks/useBlur'
import withSearchProvider from '../../../hooks/withSearchProvider'

const Card = withSearchProvider(({ initialValue, initialItems, onSelectionChange, searchProvider, onClear, requestDelay, searchTitle, ...props }) => {
  const input = useRef(null)

  const [focus, handleFocus, handleBlur] = useBlur()

  const [value, setValue] = useState(initialValue)
  // This is experimental, it works for now, but we'll see if I like the UI
  const { items, handleAutocomplete, clear } = useAutocorrect({
    items: initialItems, initialQuery: initialValue, fetch: searchProvider.search
  })

  const debounceAutocomplete = debounce(requestDelay, handleAutocomplete)
  const throttleAutocomplete = throttle(requestDelay, handleAutocomplete)

  // Clear the autocompletes when we leave the DOM
  useEffect(() => {
    return () => {
      debounceAutocomplete.cancel()
      throttleAutocomplete.cancel()
    }
  }, [throttleAutocomplete, debounceAutocomplete])

  // Handle the effect of input changing
  useEffect(() => {
    if (value && value.length < 5 && value.length !== 0) {
      throttleAutocomplete(value)
    } else if (value && value.length >= 5) {
      debounceAutocomplete(value)
    }
  }, [value])

  // Set the input via state, in theory could move this to autocomplete too
  const handleChange = useCallback((event) => {
    const value = event.target.value
    setValue(value)
  }, [debounceAutocomplete, throttleAutocomplete])

  const handleSelectionChange = useCallback((selected) => {
    // This is for analytics only
    onSelectionChange && onSelectionChange({ ...selected, $__query: value })
  }, [value, onSelectionChange])

  const handleClear = useCallback((event) => {
    event.preventDefault()

    clear()
    setValue('')
    onClear && onClear(event)

    if (input && input.current) {
      input.current.value = ''
      input.current.focus()
    }
  }, [input, clear, onClear])

  return (
    <Wrapper>
      <Input ref={input} value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} onClick={handleClear} {...props} />
      {focus && value.length > 0 && <Dropdown onSelectionChange={handleSelectionChange} values={items} title={searchTitle} isLoading />}
    </Wrapper>
  )
}, 'Search.Card')

Card.defaultProps = {
  initialItems: [],
  initialValue: '',
  requestDelay: 200,
  searchTitle: 'Search Results'
}

Card.propTypes = {
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
  initialItems: PropTypes.array,

  onClear: PropTypes.func,
  onSelectionChange: PropTypes.func,

  searchTitle: PropTypes.string,
  searchProvider: PropTypes.object,
  requestDelay: PropTypes.number
}

const mapDispatchToProps = (dispatch) => ({
  onSelectionChange: (selected) => dispatch(setSelected(selected)),
  onClear: () => dispatch(clearSelected())
})

const _Card = connect(null, mapDispatchToProps)(Card)

export { _Card as Card }
