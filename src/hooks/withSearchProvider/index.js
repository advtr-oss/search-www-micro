/* eslint-disable */

/**
 *
 * Wrap the component with SearchProvider
 *
 * @note Workaround for an issue
 * */

import React from 'react'

import getSearchProvider from '../getSearchProvider'

export default function withSearchProvider (WrappedComponent) {
  return ({ searchProvider = getSearchProvider(), ...rest }) =>
    <WrappedComponent searchProvider={searchProvider} {...rest} />
}
