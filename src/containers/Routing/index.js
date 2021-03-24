/**
 * This is really messy, but is probably more important than it looks
 *
 * Handles any routing and url parsing for now, should do switching when needs be
 *
 * */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

import SearchCard from '../SearchCard'
import Detail from '../Detail'

import { selectPOI } from '../SearchCard/actions'
import createURL from '../../utils/placeRouterURL'
import getSearchProvider from '../../hooks/getSearchProvider'

function RoutingProvider ({ location, history, push, ...rest }) {
  const searchProvider = getSearchProvider()
  const dispatch = useDispatch()

  useEffect(() => {
    if (rest.poi && !rest.poi.loading) {
      const url = createURL(rest.poi)
      const data = {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash,
        state: {
          poi: rest.poi
        }
      }

      push(data)
      sessionStorage.setItem('lastVisitedPoi', JSON.stringify(data))
    }
  }, [push, rest.poi])

  // If someone sends a link we need to know
  useEffect(() => {
    const lookup = async (id) => {
      let data
      try {
        data = await searchProvider.getDetails(id)
      } catch (err) {
        return console.error(err)
      }

      return data.data
    }

    const params = new URLSearchParams(location.search)
    if (params.has('id') && rest.poi.loading) {
      const data = params.get('id')
      lookup(data).then((response) => dispatch(selectPOI(response)))
    }
  }, [location.search, dispatch])

  return (
    <Switch>
      <Route exact path='/place/*' component={Detail} />
      <Route path='*' component={SearchCard} />
    </Switch>
  )
}

RoutingProvider.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  push: PropTypes.func
}

const mapStateToProps = state => ({
  location: state.router.location,
  history: state.router.history,
  poi: state.searchCard.selected
})

export default connect(mapStateToProps, { push })(RoutingProvider)
