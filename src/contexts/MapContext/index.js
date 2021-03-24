/**
 * Map details, could be a context rather than an empty component
 *
 * TODO: Figure what the fuck this should do
 *
 * */
import { createContext } from 'react'

const MapContext = createContext({
  setMap: () => { }
})

export default MapContext
