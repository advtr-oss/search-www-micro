import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import ReactGA from 'react-ga'
import { nanoid } from 'nanoid'

import Theme from '../Theme'

import TrackingProvider from '../TrackingProvider'
import GlobalStyle from '../../components/GlobalStyle'

import SearchPage from '../SearchPage'
import AcknowledgmentsPage from '../Acknowledgments'

const set = (obj) => {
  window.ga && ReactGA.set(obj)
}

export default function App () {
  // Set a session token, for our logging purposes
  useEffect(() => {
    const session = nanoid()
    if (window && !window.sessionStorage.getItem('sessionToken')) {
      window.sessionStorage.setItem('sessionToken', session)
      set({ dimension1: session })
    } else if (window.sessionStorage.getItem('sessionToken')) {
      set({ dimension1: window.sessionStorage.getItem('sessionToken') })
    }
  })

  return (
    <Theme>
      <TrackingProvider>
        <GlobalStyle />
        <Switch>
          <Route path='/acknowledgments' component={AcknowledgmentsPage} />
          <Route path='*' component={SearchPage} />
        </Switch>
      </TrackingProvider>
    </Theme>
  )
}
