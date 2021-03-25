import ReactGA from 'react-ga'

(function () {
  if (!process.env.REACT_APP_GOOGLE_ANALYTICS) return

  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS, {
    debug: process.env.NODE_ENV === 'development'
  })

  const ga = ReactGA.ga()
  ga('set', 'anonymizeIp', true)
  ga('set', 'transport', 'beacon')
})()
