import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import { nanoid } from 'nanoid'

import Theme from '../Theme'

import TrackingProvider from '../TrackingProvider'
import GlobalStyle from '../../components/GlobalStyle'

import SearchPage from '../SearchPage'

export default function App () {
  // Set a session token, for our logging purposes
  useEffect(() => {
    const session = nanoid()
    if (window && !window.sessionStorage.getItem('sessionToken')) {
      window.sessionStorage.setItem('sessionToken', session)
    }
  })

  return (
    <Theme>
      <TrackingProvider>
        <GlobalStyle />
        <Switch>
          <Route path='*' component={SearchPage} />
        </Switch>
      </TrackingProvider>
    </Theme>
  )
}
