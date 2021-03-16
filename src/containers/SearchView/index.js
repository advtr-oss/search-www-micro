/**
 * SearchView.js
 *
 * The main bulk of the system, here we handle the
 * searching of the city
 *
 * */

import React, { createRef, Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
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

export class SearchView extends Component {
  constructor (props) {
    super(props)

    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

    this.debounceAutocomplete = debounce(props.requestDelay, this._handleAutocomplete)
    this.throttleAutocomplete = throttle(props.requestDelay, this._handleAutocomplete)

    this.state = {
      focus: false,
      loading: false,
      items: props.items,
      isCleared: false,
      selected: !!props.suggestion,
      value: props.suggestion || ''
    }
  }

  // Cleanup
  componentWillUnmount () {
    this.debounceAutocomplete.cancel()
    this.throttleAutocomplete.cancel()
  }

  handleInput (event) {
    const value = event.target.value
    this.setState({ value }, () => {
      if (value.length < 5 && value.length !== 0) {
        this.throttleAutocomplete(value)
      } else if (value.length >= 5) {
        this.debounceAutocomplete(value)
      }
    })
  }

  async _handleAutocomplete (query) {
    this.waitingFor = query

    let data
    try {
      // Should use proper location data here, be it based on where, or the centre is??
      data = await this.props.searchProvider.search(query, { location: { lat: '0', lon: '0' } })
    } catch (error) {
      return console.error(error)
    }

    // If the debounced function returns after the next call
    // then we can ignore the response in favour of the most
    // up to date response
    if (query !== this.waitingFor) return

    // Maybe errors got through
    if (data.status && data.status !== 200) {
      return console.error(data.error.message)
    }

    // If empty doesnt mean the request failed
    if (!data) return

    this.setState({ items: data.results, loading: false })
  }

  // UI Update
  handleFocus (event) {
    this.setState({ focus: true, selected: false })
  }

  // UI Update, have to wait a timeout so you grab the selected index before it goes
  // might not be needed anymore due to using state and not css `:focus`
  handleBlur (event) {
    // Waiting for onSelect to handle before blur-ing
    setTimeout(() => {
      this.setState({ focus: this.state.isCleared, isCleared: false })
    }, 200)
  }

  // TODO: See how to fix this for now??
  // clean the state and items
  handleClear (event) {
    // Horrible workaround here
    //
    // Maybe a better way is to set a flag here that is wiped by onFocus
    // and doesn't get in the way of onBlur ?? or do what I did before and
    // reload the page
    this.setState({
      value: '',
      items: [],
      isCleared: true
    })

    const onClear = this.props.onClear
    if (onClear) onClear(event)
  }

  // Pass this to the parent
  handleSelect (selected) {
    this.setState({ selected: true })

    const onComplete = this.props.onComplete
    if (onComplete) onComplete(new Selected(selected.value, this.state.value, selected.index))
  }

  render () {
    const {
      handleBlur,
      handleFocus,
      handleInput,
      handleClear,
      handleSelect,
      state: {
        focus,
        value,
        items,
        loading,
        isCleared,
        selected
      },
      props: {
        title,
        placeholder,
        suggestion
      }
    } = this

    return (
      <Wrapper className='search' focus={focus}>
        <SearchInput
          onFocus={handleFocus} onBlur={handleBlur} onInput={handleInput}
          onClear={handleClear} value={!!suggestion && selected ? suggestion : value } placeholder={placeholder}
        />
        {focus && <SearchDropdown values={items} onSelect={handleSelect} title={title} loading={loading} />}
      </Wrapper>
    )
  }
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
