import React, { createContext } from 'react'

const RoutingOptions = {
  SEARCH: 'SEARCH',
  POI: 'POI'
}

const RoutingContext = createContext({
  changeActive: () => {}
})

export default RoutingContext
export { RoutingOptions }
