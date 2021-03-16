import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { ThemeProvider } from 'styled-components'

import { makeSelectDarkMode } from './selectors'

import theme from '../../themes'

const Theme = ({ darkMode, children }) => {
  return <ThemeProvider theme={{ ...theme, mode: darkMode }}>{children}</ThemeProvider>
}

Theme.propTypes = {
  darkMode: PropTypes.bool,
  children: PropTypes.node.isRequired
}

const mapStateToProps = createSelector(
  makeSelectDarkMode(),
  darkMode => ({
    darkMode
  })
)

export default connect(mapStateToProps)(Theme)
