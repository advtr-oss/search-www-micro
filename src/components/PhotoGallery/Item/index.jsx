/**
 * This is the basic version of this, will look at adding srcset/sizes that generate
 * automatically when passed the aspect ratio.
 * */

import PropTypes from 'prop-types'
import React, { useState, useCallback, useMemo, useRef } from 'react'

import Wrapper from './Wrapper'
import { Image, LoadingSpan } from './components'
import { getImgSizesString } from './getter/getSizes'
import { getImgSrcSetString } from './getter/getSrcSet'

const Item = ({ urls, links, alt, color: background, rect }) => {
  const ref = useRef()
  const [isLoading, setLoading] = useState(true)

  // Do this so we can at least show something lmao
  const handleLoad = useCallback(() => {
    setLoading(false)
  }, [])

  const srcSet = useMemo(() => getImgSrcSetString(urls.raw, rect, 300), [rect, urls])

  const sizes = useMemo(() => getImgSizesString(urls.raw, rect, 155), [rect, urls])

  return (
    <Wrapper aspectRatio={rect.width / rect.height} rect={rect}>
      <a href={links.html} target="_blank" rel="noreferrer">
        <Image isLoading={isLoading} onLoad={handleLoad} src={urls.raw} srcSet={srcSet} sizes={sizes} alt={alt} ref={ref} />
      </a>
      {isLoading && <LoadingSpan background={background} />}
    </Wrapper>
  )
}

Item.defaultProps = {
  defaultWidth: 400
}

Item.propTypes = {
  id: PropTypes.string,

  urls: PropTypes.shape({
    raw: PropTypes.string,
    full: PropTypes.string,
    regular: PropTypes.string,
    small: PropTypes.string,
    thumb: PropTypes.string,
    small_s3: PropTypes.string
  }).isRequired,
  alt: PropTypes.string,

  rect: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired,

  links: PropTypes.shape({
    self: PropTypes.string,
    html: PropTypes.string,
    download: PropTypes.string,
    download_location: PropTypes.string
  }).isRequired,

  color: PropTypes.string,
  defaultWidth: PropTypes.number
}

export { Item }
