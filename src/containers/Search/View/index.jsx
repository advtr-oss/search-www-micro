/**
 * Search.View is the final boss of Search, it's the glue that holds it all in place,
 *
 * any final UI changes should happen here, any A/B testing should be loaded and set via
 * here, same with translations. No state management, or anything that can change the UI
 * on its own. It is set to be loaded by `Routing` (Working name) which will set/handle
 * the analytics, state manipulation, and both Searching and displaying the results.
 * */

import React from 'react'

import messages from './messages'

import Container from './Container'
import { FormattedView } from './FormattedView'

import Search from '../../../components/Search'

const View = ({ ...props }) => {
  return (
    <Container>
      <FormattedView title={messages.title} placeholder={messages.placeholder} aria-input={messages['aria-input']}>
        {({ title, placeholder, 'aria-input': aria }) => (
          <Search.Card placeholder={placeholder} searchTitle={title} aria-label={aria} />
        )}
      </FormattedView>
    </Container>
  )
}

export { View }
