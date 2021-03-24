/**
 * SearchCard.js
 *
 * Should have a hidden initial values, so we can test better,
 * maybe, or have a mocked API ??
 *
 * */
import React, { useCallback, useState } from 'react'
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
        {(title) => (
          children({ placeholder, title })
        )}
      </FormattedMessage>
    )}
  </FormattedMessage>
)

FormattedView.propTypes = {
  placeholder: PropTypes.object,
  title: PropTypes.object,
  children: PropTypes.node
}

const SearchCard = (props) => {
  const [selected, setSelected] = useState(null)

  const { push } = useHistory()
  const tracking = useTracking()

  const { onComplete, onClear } = props

  // Handle analytics
  const handleComplete = useCallback((selected) => {
    tracking.trackGoogleAnalyticsEvent('event', ADVTR_QUERY_CHARS, {
      event_category: ADVTR_SEARCH_RESULTS_EVENT,
      event_label: 'search',
      value: selected.queryString
    })

    tracking.trackGoogleAnalyticsEvent('event', ADVTR_SELECTED_INDEX, {
      event_category: ADVTR_SEARCH_RESULTS_EVENT,
      event_label: 'search',
      value: selected.index
    })

    tracking.trackGoogleAnalyticsEvent('event', ADVTR_QUERY_SCORE, {
      event_category: ADVTR_SEARCH_RESULTS_EVENT,
      event_label: 'search',
      value: selected.value.score
    })

    // All is done in the router

    // props.history.push(createURL(selected))
    onComplete(selected)
    setSelected(selected.value)
  }, [onComplete, setSelected])

  // On Clear go to home, more so for when in PlaceAPI
  const handleClear = useCallback(() => {
    if (selected) push('/')
    onClear()
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
            onComplete={handleComplete} onClear={handleClear} suggestion={selected && selected.containers.entity.value}
            searchProvider={searchProvider} placeholder={placeholder} title={title}
          />
        )}
      </FormattedView>
    </Wrapper>
  )
}

SearchCard.propTypes = {
  onComplete: PropTypes.func,
  onClear: PropTypes.func
}

const mapStateToProps = createSelector(
  makeSelectCardInput(),
  poi => {
    return {
      poi
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
