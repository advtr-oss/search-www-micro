import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Header } from '@advtr/tidy'
import React, { useMemo } from 'react'

import Wrapper from './Wrapper'

const Section = ({ className, title, render }) => {
  const section = useMemo(() => render({ title }), [render, title])

  return (
    <Wrapper className={clsx(className, 'section')}>
      {title && <Header className='header' as='h3' title={title} /> }
      {section}
    </Wrapper>
  )
}

Section.displayName = 'Detail.Card.Section'

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  render: PropTypes.func.isRequired
}

export { Section }
