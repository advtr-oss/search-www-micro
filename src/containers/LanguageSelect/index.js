/*
 *
 * LanguageSelect
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { Select } from '../../components/LanguageSelect'
import Wrapper from './Wrapper'
import messages from './messages'
import { appLocales } from '../../i18n'
import { changeLocale } from '../LanguageProvider/actions'
import { makeSelectLocale } from '../LanguageProvider/selectors'

export function LanguageSelect (props) {
  return (
    <Wrapper>
      <Select
        value={props.locale}
        values={appLocales}
        messages={messages}
        onToggle={props.onLocaleToggle}
      />
    </Wrapper>
  )
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
