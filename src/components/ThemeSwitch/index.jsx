import React from 'react'
import PropTypes from 'prop-types'
import { ThemeSwitch as ADVThemeSwitch } from '@advtr/tidy'

export default class ThemeSwitch extends React.Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  render () {
    return <ADVThemeSwitch onClick={this.props.onClick} aria-label='Toggle Dark Mode' />
  }
}
