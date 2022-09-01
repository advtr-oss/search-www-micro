import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

/**
 * Clean up the code a little
 * */
export const FormattedView = ({ watermark, children }) => (
  <FormattedMessage {...watermark}>
    {(watermark) => children({ watermark: watermark[0] }) }
  </FormattedMessage>
)

FormattedView.propTypes = {
  watermark: PropTypes.object,
  children: PropTypes.func
}
