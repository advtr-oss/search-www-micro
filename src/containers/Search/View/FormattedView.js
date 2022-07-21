import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

/**
 * Clean up the code a little
 * */
export const FormattedView = ({ placeholder, title, children }) => (
  <FormattedMessage {...placeholder}>
    {(placeholder) => (
      <FormattedMessage {...title}>
        {(title) => {
          return children({ placeholder: placeholder[0], title: title[0] })
        }}
      </FormattedMessage>
    )}
  </FormattedMessage>
)

FormattedView.propTypes = {
  placeholder: PropTypes.object,
  title: PropTypes.object,
  children: PropTypes.func
}
