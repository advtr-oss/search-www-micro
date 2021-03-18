/**
 * Maybe not important, but could come in handy, just an idea for now
 * */

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import Wrapper from "./Wrapper";

import createURL from "../../utils/placeRouterURL";
import SearchCard from "../SearchCard";

function RoutingProvider({ location, history, push, ...rest }) {
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
      sessionStorage.setItem("lastVisitedPoi", JSON.stringify(data))
    }
  }, [push, rest.poi])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.has('id')) {
      const data = params.get('id')
      console.log(data)
    }
  }, [location.search])

  return (
    <>
      <SearchCard />
    </>
  )
}

const mapStateToProps = state => ({
  location: state.router.location,
  history: state.router.history,
  poi: state.searchCard.selected
})

export default connect(mapStateToProps, { push })(RoutingProvider)
