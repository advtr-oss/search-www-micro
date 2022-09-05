/**
 * This is kinda like the Google wikipedia prompt
 * */

import React from 'react'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'
import sanitizeHtml from 'sanitize-html'

import Wrapper from './Wrapper'

import { Feedback } from './Feedback'

/**
 * @param {string} title
 * @param {string} locale
 * */
const wiki = (title, locale = 'en') => `https://${locale}.wikipedia.org/wiki/${title.replaceAll(' ', '_')}`

const Wikipedia = ({ title, embed, extract, extract_html: extractHTML }) => {
  return (
    <Wrapper>
      <div>
        {embed ? <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(extractHTML, { allowedTags: ['b', 'i', 'a'] }) }} /> : extract}
        <ReactGA.OutboundLink eventLabel={wiki(title, 'en')} to={wiki(title, 'en')} target="_blank">Wikipedia</ReactGA.OutboundLink>
      </div>
      <Feedback ping={title} className='feedback' />
    </Wrapper>
  )
}

Wikipedia.defaultProps = {
  embed: false
}

Wikipedia.propTypes = {
  query: PropTypes.string,

  type: PropTypes.string,
  title: PropTypes.string,

  thumbnail: PropTypes.object,
  originalimage: PropTypes.object,

  lang: PropTypes.string,
  description: PropTypes.string,
  extract: PropTypes.string.isRequired,
  extract_html: PropTypes.string.isRequired,

  embed: PropTypes.bool
}

export { Wikipedia }
