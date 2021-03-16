import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Wrapper from './Wrapper'

import Toggle from '../../components/Toggle'
import { changeTheme } from '../Theme/actions'
import { makeSelectDarkMode } from '../Theme/selectors'

export function ThemeToggle (props) {
  return (
    <Wrapper>
      <Toggle defaultChecked={props.darkMode} onChange={props.onThemeToggle} className='dark-mode-toggle' aria-label='Toggle Dark Mode' />
    </Wrapper>
  )
}

ThemeToggle.propTypes = {
  onThemeToggle: PropTypes.func,
  darkMode: PropTypes.bool
}

const mapStateToProps = createSelector(
  makeSelectDarkMode(),
  darkMode => ({
    darkMode
  })
)

export function mapDispatchToProps (dispatch) {
  return {
    onThemeToggle: evt => dispatch(changeTheme(evt.value)),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeToggle)
