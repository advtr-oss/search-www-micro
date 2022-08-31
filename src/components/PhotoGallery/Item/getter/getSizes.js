import { calc, maxHeight, maxWidth, min, minus, multiplication, percent, pixel, vh, vw } from '../../../../utils/css'
import { width as aspectWidth, height as aspectHeight } from '../../../../utils/images/aspect'

const horizontalGuttering = '16px'
const verticalGuttering = '16px'

/**
 * @param {string|URL} src
 * @param {{ height: number, width: number }} size
 * @param {number} minimumVerticalHeight
 * */
const getImgSizesString = (src, size, minimumVerticalHeight) => {
  const defaults = {
    width: vw(100),
    height: vh(100)
  }

  const padding = {
    totalHorizontal: 2 * parseInt(horizontalGuttering),
    totalVertical: parseInt(verticalGuttering) + minimumVerticalHeight,
    horizontalLength: horizontalGuttering,
    verticalLength: pixel(parseInt(verticalGuttering) / 2)
  }

  const baseMediaCondition = maxWidth(pixel('767'))
  const horizontal = calc(minus(defaults.width, pixel(32)))
  const vertical = calc(minus(defaults.height, pixel(20 + 155)))

  /**
   * @param {string|URL} props.src
   * @param {{ height: number, width: number }} props.size
   * @param {number} props.minimumVerticalHeight
   * */
  const { maxWidthLength, minWidthLength } = ((props) => {
    const { size } = props
    const { width, height } = size

    const aspect = width / height
    const calculatedWidth = aspectWidth(580, size)

    return {
      minWidthLength: min([percent(100), pixel(calculatedWidth)]),
      maxWidthLength: calc(multiplication(vertical, aspect.toPrecision(6)))
    }
  })({ src, size, minimumVerticalHeight })

  const { width, height } = size
  const { totalVertical, totalHorizontal } = padding

  const calculatedWidth = aspectWidth(580, size)
  const calculatedHeight = aspectHeight(calculatedWidth, size)

  return [
    { mediaCondition: baseMediaCondition, width: defaults.width },
    { mediaCondition: maxWidth(pixel(calculatedWidth + totalHorizontal)), width: minWidthLength },
    { mediaCondition: maxHeight(pixel(calculatedHeight + totalVertical)), width: minWidthLength },
    { mediaCondition: `(min-aspect-ratio: ${width.toString()} / ${height.toString()})`, width: maxWidthLength },
    { width: horizontal }
  ].map((el) => [el.mediaCondition, el.width].filter(el => !!el).join(' ')).join(', ')
}

export { getImgSizesString }
