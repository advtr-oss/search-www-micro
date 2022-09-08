import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useWikiFetch } from './hooks'

import { Section } from '../Section'

import { Wikipedia } from "../../../Wikipedia";

const WikiSection = ({ name, geoContainers }) => {
  const [hidden, setHidden] = useState(false)
  const [data, error, isLoading, query] = useWikiFetch(name, geoContainers)

  if (error) {
    console.error(error)
    return null
  }

  return (
    (!isLoading && !hidden) && (
      <Section className='section--wiki' render={() =>
        <Wikipedia ping={query} embed onFeedbackClicked={() => setHidden(true)} {...data} />
      } />
    )
  )
}

WikiSection.displayName = `${Section.displayName}(Wikipedia)`

WikiSection.propTypes = {
  name: PropTypes.string.isRequired,
  geoContainers: PropTypes.arrayOf(PropTypes.object).isRequired
}

export { WikiSection }
