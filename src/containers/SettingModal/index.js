import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { connect, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'

import Wrapper from './Wrapper'
import { makeSelectModalState } from './selectors'

import { Overlay, SettingModalHeader, SettingModalBody, SettingModalFooter } from '../../components/SettingModal'

import LanguageSelect from '../LanguageSelect'
import ThemeToggle from '../ThemeToggle'
import { closeModal } from './actions'

const SettingModal = ({ isOpen }) => {
  const n = useRef(null)
  const dispatch = useDispatch()

  const version = null

  return (
    <Overlay isOpen={isOpen} ref={n}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <SettingModalHeader onClick={() => { dispatch(closeModal()) }} project='search' />
        <SettingModalBody settings={[{
          title: 'Dark Mode',
          component: (<ThemeToggle />)
        }, {
          title: 'Language',
          component: (<LanguageSelect />)
        }]}
        />
        <SettingModalFooter version={version} />
      </Wrapper>
    </Overlay>
  )
}

SettingModal.propTypes = {
  isOpen: PropTypes.bool
}

const mapStateToProps = createSelector(
  makeSelectModalState(),
  isOpen => ({
    isOpen
  })
)

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingModal)
