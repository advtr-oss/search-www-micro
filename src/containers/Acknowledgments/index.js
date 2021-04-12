import React, { useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { withRouter } from 'react-router-dom'

import { DateTime } from 'luxon'

import messages from './messages'

import Wrapper from './Wrapper'

import Header from '../../components/Header'

// TODO: Add more to his, i.e links to github's etc
const Acknowledgment = ({ awk }) => (
  <div>
    <Header level='h3' title={`${awk.name} @ ${awk.version}`} />
    {awk.description && (
      <span className='description'>
        {awk.description}
      </span>
    )}
    <div className='separator'>---------------------------------------------------</div>
  </div>
)

Acknowledgment.propTypes = {
  awk: PropTypes.shape({
    name: PropTypes.string,
    version: PropTypes.string,
    description: PropTypes.string
  })
}

const AcknowledgmentsPage = ({ history }) => {
  const [acknowledgments, setAcknowledgments] = useState(null)

  // Have this in an useEffect with a loader and Memo'd
  useEffect(() => {
    if (!acknowledgments) {
      setAcknowledgments(require('../../assets/acknowledgments.json'))
    }
  }, [acknowledgments])

  return (
    <Wrapper className='container-lg'>
      <div className='header'>
        <div className='meta'>
          <FormattedMessage {...messages.header}>
            {(title) =>
              (<Header level='h1' title={title[0]} />)}
          </FormattedMessage>
          {acknowledgments && (
            <FormattedMessage {...messages.lastUpdated}>
              {(lastUpdated) =>
                (<span>{lastUpdated[0]}: {DateTime.fromMillis(acknowledgments.date).toLocaleString(DateTime.DATE_FULL)}</span>)}
            </FormattedMessage>
          )}
        </div>
        <div className='home'>
          <button className='bck-btn' onClick={(event) => { event.preventDefault(); history.push('/') }}>
            Home
          </button>
        </div>
      </div>
      {acknowledgments && (
        <div className='codeblock'>
          {Object.keys(acknowledgments.dependencies).map((key) => {
            const dep = acknowledgments.dependencies[key]
            return (
              <Acknowledgment key={key} awk={dep} />
            )
          })}
        </div>
      )}
    </Wrapper>
  )
}

AcknowledgmentsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
}

export default withRouter(memo(AcknowledgmentsPage))
