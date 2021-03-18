import React, { useContext } from 'react'

import MapContext from "../contexts/MapContext";

const useMapProvider = () => {
  const context = useContext(MapContext)
  if (!context) console.log('Check if MapContext.Provider up the tree')
  return context
}

export default useMapProvider
