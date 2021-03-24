import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

import Section from '../../../../components/Section'
import Header from '../../../../components/Header'

const HeaderSection = (props) => {
  return (
    <Section>
      <Wrapper>
        <Header level='h3'>{props.primary}</Header>
        <Header level='h4'>{props.secondary}</Header>
      </Wrapper>
    </Section>
  )
}

HeaderSection.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired
}

export default HeaderSection
