import React, { useContext } from 'react'

import TrackingContext from '../../contexts/TrackingContext'

const useTracking = () => {
  const context = useContext(TrackingContext)
  if (!context) console.log('Check if TrackingContext.Provider up the tree')
  return context
}

export default useTracking
