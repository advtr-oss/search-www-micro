/**
 * Search/View.js
 *
 * The main autocomplete system for the search
 *
 * */

import PropTypes from 'prop-types'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { debounce, throttle } from 'throttle-debounce'
import { connect } from 'react-redux'

import logger from '@harrytwright/logger'
// eslint-disable-next-line
import { unsafe__useAutocorrect as useAutocorrect } from '@advtr/tidy'

import useBlur from '../../../hooks/useBlur'
import { setSelected } from './actions'

import { Input } from '../../../components/Search/Input'
import { Dropdown } from '../../../components/Search/Dropdown'
import Wrapper from './Wrapper'

function Selected (value, queryString, index) {
  this.name = 'search-view'
  this.value = value
  this.index = index

  // For analytics
  this.queryString = queryString
}

const Card = ({ defaultValue = '', defaultItems, onSelect, searchProvider, requestDelay, placeholder, disabled, ...props }) => {
  const input = useRef(null)
  const [focus, handleFocus, handleBlur] = useBlur()

  const [value, setValue] = useState(defaultValue)
  // This is experimental, it works for now, but we'll see if I like the UI
  const { items, handleAutocomplete, clear } = useAutocorrect({
    items: defaultItems, initialQuery: defaultValue, fetch: searchProvider.search
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

  // Set the input via state, in theory could move this to autocomplete too
  const handleInput = useCallback((event) => {
    const value = event.target.value
    setValue(value)
  }, [debounceAutocomplete, throttleAutocomplete])

  // Handle the effect of input changing
  useEffect(() => {
    logger.silly('Card.postSetValue', value)
    if (value.length < 5 && value.length !== 0) {
      throttleAutocomplete(value)
    } else if (value.length >= 5) {
      debounceAutocomplete(value)
    }
  }, [value])

  const handleSelected = useCallback((selected) => {
    onSelect && onSelect(new Selected(selected.value, value, selected.index))
  }, [onSelect, value])

  const handleClear = useCallback((event) => {
    event.preventDefault()
    logger.verbose('search.view', 'handleClear clicked')

    setValue('')
    clear()

    if (input && input.current) {
      input.current.value = ''
      input.current.focus()
    }
  }, [input, clear])

  return (
    <Wrapper>
      <Input value={value} ref={input} onFocus={handleFocus} onBlur={handleBlur} placeholder={placeholder}
             disabled={disabled} onInput={handleInput} onClear={handleClear} />
      {focus && value.length > 0 && <Dropdown values={items} onSelect={handleSelected} loading />}
    </Wrapper>
  )
}

Card.displayName = 'Search.Card'

Card.defaultProps = {
  defaultItems: [],
  requestDelay: 200
}

Card.propTypes = {
  defaultValue: PropTypes.string,
  defaultItems: PropTypes.array,
  onSelect: PropTypes.func,

  placeholder: PropTypes.string,

  disabled: PropTypes.bool,

  requestDelay: PropTypes.number,
  searchProvider: PropTypes.object
}

const mapDispatchToProps = (dispatch) => ({
  onSelect: (selected) => dispatch(setSelected(selected))
})

export default connect(null, mapDispatchToProps)(Card)

export { Card }
