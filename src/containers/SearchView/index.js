/**
 * SearchView.js
 *
 * The main bulk of the system, here we handle the
 * searching of the city
 *
 * Todo: Make sure this is 100% working
 *
 * */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { debounce, throttle } from 'throttle-debounce'

import Wrapper from './Wrapper'

import { SearchInput } from '../SearchInput'
import { SearchDropdown } from '../SearchDropdown'
import withSearchProvider from '../../hooks/withSearchProvider'

function Selected (value, queryString, index) {
  this.name = 'search-view'
  this.value = value
  this.index = index

  // For analytics
  this.queryString = queryString
}

function SearchView({ items: initialItems, suggestion, requestDelay, onClear, onComplete, title, placeholder, searchProvider }) {
  const [items, setItems] = useState(initialItems)
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState(suggestion ? suggestion : '')

  let sessionToken = useRef();
  useEffect(() => {
    sessionToken.current = window && window.sessionStorage.getItem('sessionToken')
  })

  const handleBias = () => {
    if (window && window.localStorage.getItem('requestInfo'))
      return JSON.parse(window.localStorage.getItem('requestInfo')).location

    if (window && window.localStorage.getItem('mapPosition'))
      return JSON.parse(window.localStorage.getItem('mapPosition'))

    return { lat: '0', lon: '0' }
  }

  let waitingFor;
  const handleAutocomplete = async (query) => {
    waitingFor = query

    const token = sessionToken.current
    const bias = handleBias()

    let data
    try {
      // Should use proper location data here, be it based on where, or the centre is??
      data = await searchProvider.search(query, { location: bias, session: token })
    } catch (error) {
      return console.error(error)
    }

    // If the debounced function returns after the next call
    // then we can ignore the response in favour of the most
    // up to date response
    if (query !== waitingFor) return

    // Maybe errors got through
    if (data.status && data.status !== 200) {
      return console.error(data.error.message)
    }

    // If empty doesnt mean the request failed
    if (!data) return

    setItems(data.results)
  }

  // const debounceAutocomplete = debounce(requestDelay, handleAutocomplete)
  const throttleAutocomplete = throttle(requestDelay, handleAutocomplete)

  useEffect(() => () => {
    // debounceAutocomplete.cancel()
    throttleAutocomplete.cancel()
  }, [/*debounceAutocomplete, */throttleAutocomplete])

  const handleInput = useCallback((event) => {
    const value = event.target.value
    setValue(value)

    throttleAutocomplete(value)
  }, [throttleAutocomplete/*, debounceAutocomplete*/])

  const handleFocus = useCallback((event) => {
    setFocus(true)
  }, [])

  // This is so we can clear effectively
  const blur = useRef()
  const handleBlur = useCallback((event) => {
    blur.current = setTimeout(() => {
      setFocus(false)
    }, 200)
  }, [])

  const handleClear = useCallback((event) => {
    setValue('')
    setItems([])

    blur.current && clearTimeout(blur.current)

    onClear && onClear()
  }, [onClear])

  const handleSelect = useCallback((selected) => {
    const query = value
    setValue(selected.value.containers.entity.value)

    onComplete && onComplete(new Selected(selected.value, query, selected.index))
  }, [onComplete, value])

  /**
   * May have to tie focus in here with the child component
   * */
  return (
    <Wrapper className='search' focus={focus}>
      <SearchInput
        onFocus={handleFocus} onBlur={handleBlur} onInput={handleInput}
        onClear={handleClear} value={value} placeholder={placeholder}
      />
      {focus && <SearchDropdown values={items} onSelect={handleSelect} title={title} loading={false} />}
    </Wrapper>
  )
}

// Just so we don't throw an errors
const noop = () => { }

SearchView.defaultProps = {
  items: [],
  placeholder: 'Search for a city',
  requestDelay: 200,
  title: 'Search Results',
  onInputClear: noop,
  onComplete: noop,
  onClear: noop
}

SearchView.propsTypes = {
  items: PropTypes.array,
  onClear: PropTypes.func,
  onInputClear: PropTypes.func,
  onComplete: PropTypes.func,
  placeholder: PropTypes.string,
  requestDelay: PropTypes.number,
  searchProvider: PropTypes.object,
  suggestion: PropTypes.string,
  title: PropTypes.string
}

export default withSearchProvider(SearchView)
