import React from 'react'
import PropTypes from 'prop-types'

import sanitizeHtml from 'sanitize-html'

import Wrapper from './Wrapper'

const Wikipedia = ({ extract, embed, extract_html: extractHTML }) => {
  if (embed) { return <Wrapper dangerouslySetInnerHTML={{ __html: sanitizeHtml(extractHTML, { allowedTags: ['p', 'b', 'i', 'a'] }) }} /> }

  return (
    <Wrapper>
      {extract}
    </Wrapper>
  )
}

Wikipedia.defaultProps = {
  embed: !!process.env.REACT_APP_EMBED_HTML
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
