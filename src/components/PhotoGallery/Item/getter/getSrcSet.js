import { buildImgixUrl } from 'ts-imgix'

import { width } from '../../../../utils/images/aspect'

/**
 * @param {string|URL} url
 * @param {{ height: number, width: number }} rect
 * @param {number} intervals
 * */
const getImgSrcSetString = (url, rect, intervals) => {
  const bounds = {
    lower: width(155, rect),
    upper: rect.width
  }

  const max = Math.ceil(bounds.upper)
  const minimum = Math.trunc((bounds.upper - bounds.lower) / intervals)

  let count = 1
  if (bounds.lower <= bounds.lower + minimum) {
    count = Math.max(0, Math.floor((bounds.lower + minimum) - bounds.lower + 1))
  }

  const arr = [...Array(count).fill(0).map((_, idx) => Math.ceil(bounds.lower + (intervals * idx))), max]
  return arr.map((width) => {
    const uri = buildImgixUrl(url)({
      w: width,
      fit: 'crop',
      ar: { w: rect.width, h: rect.height }
    })
    return `${uri} ${width}w`
  }).join(', ')
}

export { getImgSrcSetString }
