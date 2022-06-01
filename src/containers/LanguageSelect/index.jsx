/*
 *
 * LanguageSelect
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { LanguageSelect as ADVLanguageSelect } from '@advtr/tidy'

import messages from './messages'
import { appLocales } from '../../i18n'
import { changeLocale } from '../LanguageProvider/actions'
import { makeSelectLocale } from '../LanguageProvider/selectors'

function LanguageSelect (props) {
  return <ADVLanguageSelect locale={props.locale} locales={appLocales} messages={messages} onLocaleToggle={props.onLocaleToggle} />
}

LanguageSelect.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string
}

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale
  })
)

export function mapDispatchToProps (dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelect)
