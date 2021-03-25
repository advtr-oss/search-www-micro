/**
 * SearchCard.js
 *
 * Should have a hidden initial values, so we can test better,
 * maybe, or have a mocked API ??
 *
 * */
import React, { useCallback, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import messages from './messages'
import { selectPOI, clearPOI } from './actions'
import { makeSelectCardInput } from './selectors'

import SearchView from '../SearchView'
import Wrapper from './Wrapper'

import useTracking from '../../hooks/useTracking'
import { ADVTR_SEARCH_RESULTS_EVENT, ADVTR_QUERY_CHARS, ADVTR_SELECTED_INDEX, ADVTR_QUERY_SCORE } from '../../utils/analyticsConstants'
import getSearchProvider from '../../hooks/getSearchProvider'
import FeatherIcon from '../../components/Icons/Feather'

/**
 * Clean up the code a little
 * */
const FormattedView = ({ placeholder, title, children }) => (
  <FormattedMessage {...placeholder}>
    {(placeholder) => (
      <FormattedMessage {...title}>
        {(title) => {
          return children({ placeholder: placeholder[0], title: title[0] })
        }}
      </FormattedMessage>
    )}
  </FormattedMessage>
)

FormattedView.propTypes = {
  placeholder: PropTypes.object,
  title: PropTypes.object,
  children: PropTypes.func
}

const SearchCard = ({ onComplete, onClear, poi, ...rest }) => {
  const [selected, setSelected] = useState(!!poi)

  const { push } = useHistory()
  const tracking = useTracking()

  // Keep selected up to date
  useEffect(() => {
    setSelected(!!poi)
  }, [poi])

  // Handle analytics
  const handleComplete = useCallback((selected) => {
    tracking.trackGoogleAnalyticsEvent('event', ADVTR_QUERY_CHARS, {
      category: ADVTR_SEARCH_RESULTS_EVENT,
      label: 'search',
      value: selected.queryString
    })

    tracking.trackGoogleAnalyticsEvent('event', ADVTR_SELECTED_INDEX, {
      category: ADVTR_SEARCH_RESULTS_EVENT,
      label: 'search',
      value: selected.index
    })

    tracking.trackGoogleAnalyticsEvent('event', ADVTR_QUERY_SCORE, {
      category: ADVTR_SEARCH_RESULTS_EVENT,
      label: 'search',
      value: selected.score
    })

    // All is done in the router

    onComplete(selected)
    setSelected(true)
  }, [onComplete, setSelected])

  // On Clear go to home, more so for when in PlaceAPI
  const handleClear = useCallback(() => {
    if (selected) push('/')
    onClear()
    setSelected(false)
  }, [selected, onClear, push])

  const searchProvider = getSearchProvider()

  return (
    <Wrapper className={clsx(selected && 'has-poi')} selected={selected}>
      <span>
        <FeatherIcon type='menu' />
      </span>
      <FormattedView title={messages.title} placeholder={messages.placeholder}>
        {({ title, placeholder }) => (
          <SearchView
            onComplete={handleComplete} onClear={handleClear} suggestion={selected && poi.name}
            searchProvider={searchProvider} placeholder={placeholder} title={title}
          />
        )}
      </FormattedView>
    </Wrapper>
  )
}

SearchCard.propTypes = {
  onComplete: PropTypes.func,
  onClear: PropTypes.func,
  poi: PropTypes.object
}

const mapStateToProps = createSelector(
  makeSelectCardInput(),
  selected => {
    return {
      poi: selected
    }
  }
)

export function mapDispatchToProps (dispatch) {
  return {
    onComplete: evt => dispatch(selectPOI(evt.value)),
    onClear: _ => dispatch(clearPOI()),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCard)
