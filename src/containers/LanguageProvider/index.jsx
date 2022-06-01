/**
 * @advtr/tidy tries to be un-opinionated, so for this we need to import `LanguageProvider` and wrap it for redux
 * */

import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { LanguageProvider } from '@advtr/tidy'

import { makeSelectLocale } from './selectors'

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale
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
)(LanguageProvider)
