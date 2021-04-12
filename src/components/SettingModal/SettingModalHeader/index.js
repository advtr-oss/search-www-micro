import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

import Header from '../../Header'
import FeatherIcon from '../../Icons/Feather'

const SettingModalHeader = ({ project: title, onClick }) => (
  <Wrapper className='setting-modal_header'>
    <Header title='Advtr' level='h1' as='span' />
    <Header className='project' title={title} level='h2' as='span' />
    <button className='setting-modal_header-close' type='button' onClick={onClick}>
      <FeatherIcon type='x' />
    </button>
  </Wrapper>
)

SettingModalHeader.propTypes = {
  project: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SettingModalHeader
