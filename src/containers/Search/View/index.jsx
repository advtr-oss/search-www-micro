import React from 'react'

import messages from './messages'

import Container from "./Container";
import { FormattedView } from "./FormattedView";

import Search from '../../../components/Search'

const View = ({ }) => {
  return (
    <Container>
      <FormattedView title={messages.title} placeholder={messages.placeholder}>
        {({ title, placeholder }) => (
          <Search.Card placeholder={placeholder} searchTitle={title} />
        )}
      </FormattedView>
    </Container>
  )
}

export default View
