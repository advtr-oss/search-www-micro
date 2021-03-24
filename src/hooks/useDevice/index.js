import { useContext } from 'react'

import DeviceContext from '../../contexts/DeviceContext'

function useDeviceState () {
  const context = useContext(DeviceContext)
  if (context === undefined) {
    throw new Error('useDeviceState must be used within a DeviceProvider')
  }
  return context
}

export default useDeviceState
