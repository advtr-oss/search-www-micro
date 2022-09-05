import { useContext } from 'react'

import AnalyticsContext from '../../contexts/AnalyticsContext'

const useAnalyticsProvider = () => {
  return useContext(AnalyticsContext)
}

export default useAnalyticsProvider
