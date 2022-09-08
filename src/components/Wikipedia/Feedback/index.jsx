import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Flag } from 'react-feather'

import { setCookie, getCookie } from '@advtr/tidy'

import Wrapper from './Wrapper'

import useAnalyticsProvider from '../../../hooks/useAnalyticsProvider'

const useFeedback = (ping, onClick) => {
  const analytics = useAnalyticsProvider()

  const handleClick = useCallback((event) => {
    event.preventDefault()

    analytics && analytics.trackAdvtrAnalyticsEvent('feedback', 'wikipedia', ping)

    // In theory this should not need to be a set, but this way we don't overwrite the values
    // and in the future will be handled by a proxy service, and not here.
    const reported = new Set(JSON.parse(getCookie('FEEDBACK:WIKI:REPORTED')) || [])
    reported.add(ping);

    setCookie('FEEDBACK:WIKI:REPORTED', JSON.stringify(Array.from(reported)), 52 * 7 * 24 * 60)

    onClick && onClick(event)
  }, [onClick, ping])

  return [handleClick]
}

const Feedback = ({ onClick, ping, title, ...rest }) => {
  const [handleClick] = useFeedback(ping, onClick)

  return (
    <Wrapper onClick={handleClick} {...rest}>
      <Flag />
      <span>{title}</span>
    </Wrapper>
  )
}

Feedback.defaultProps = {
  title: 'Report False Data'
}

Feedback.propTypes = {
  ping: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}

export { Feedback }
