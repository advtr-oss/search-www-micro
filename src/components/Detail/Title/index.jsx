/**
 * This is temporary, should allow for a link to look up the secondary locations
 * */

import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '@advtr/tidy'

import Wrapper from './Wrapper'

const Title = ({ primary, secondary }) => (
  <Wrapper>
    <Header className='primary' as='h3' title={primary} />
    <Header className='secondary' as='h4' title={secondary} adv={{ foreground: 'muted' }} />
  </Wrapper>
)

Title.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired
}

export { Title }
