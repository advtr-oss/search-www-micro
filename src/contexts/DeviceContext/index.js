/**
 * Here we can get some basic information of how the user is connecting
 * */

import React, { createContext } from 'react'

const DeviceContext = createContext({
  isApple: false,
  isMobile: false,
  isAndroid: false,
  deviceType: 'device-other',
  width: 0
})

export default DeviceContext
