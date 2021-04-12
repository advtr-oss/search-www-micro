import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import { Title, SettingGroup, SettingGroupName, SettingGroupContent } from './Components'

const SettingModalBody = ({ settings }) => (
  <Wrapper className='setting-modal_body'>
    <Title>Preferences</Title>
    {settings.map((setting, idx) => (
      <SettingGroup className='setting-modal_body-setting' key={idx}>
        <SettingGroupName>{setting.title}</SettingGroupName>
        <SettingGroupContent>{setting.component}</SettingGroupContent>
      </SettingGroup>
    ))}
  </Wrapper>
)

SettingModalBody.propTypes = {
  settings: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.node,
    title: PropTypes.string
  }))
}

export default SettingModalBody
