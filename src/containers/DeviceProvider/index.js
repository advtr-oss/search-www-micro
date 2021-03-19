import React, { Children } from 'react'
import DeviceContext from "../../contexts/DeviceContext";

function DeviceProvider({ children }) {
  const deviceData = {
    isApple: false,
    isMobile: false,
    isAndroid: false,
    deviceType: 'device-other',
    width: window.innerWidth
  }

  if (/(iPhone|iPad|iPod)/.test(navigator.userAgent)) {
    deviceData.isApple = true
    deviceData.isMobile = true
    deviceData.deviceType = 'device-ios'

    document.body.classList.add('device-ios')
  } else if (/Android/.test(navigator.userAgent)) {
    deviceData.isAndroid = true
    deviceData.isMobile = true
    deviceData.deviceType = 'device-android'

    document.body.classList.add('device-android')
  } else {
    document.body.classList.add('device-other')
  }

  return (
    <DeviceContext.Provider value={deviceData}>
      {Children.only(children)}
    </DeviceContext.Provider>
  )
}

export default DeviceProvider
