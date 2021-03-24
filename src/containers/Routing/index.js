/**
 * Maybe not important, but could come in handy, just an idea for now
 * */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

// import Wrapper from './Wrapper'

import createURL from '../../utils/placeRouterURL'
import SearchCard from '../SearchCard'

function RoutingProvider ({ location, history, push, ...rest }) {
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

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.has('id') && !rest.poi) {
      const data = params.get('id')
      console.log('routing', data)
    }
  }, [location.search])

  return (
    <>
      <SearchCard />
    </>
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
