/* eslint-disable */

/**
 *
 * Wrap the component with poi lookup
 *
 * Saves me writing it twice, should work
 * */

import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  poi: state.searchCard.selected
})

export default function withPOI (WrappedComponent) {
  return connect(mapStateToProps)(({ poi, ...rest }) =>
    <WrappedComponent poi={poi} {...rest} />)
}
