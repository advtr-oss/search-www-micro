import styled, { css } from 'styled-components'

import { orientation } from '../../../utils/images/aspect'

const Wrapper = styled.div`
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //
  position: relative;
  width: 100%;
  //height: 0;
  /**
   * For human readability, the ratio is expressed as
   * width / height, so we need to invert it.
   */
  padding-bottom: ${({ aspectRatio }) => (1 / aspectRatio) * 100}%;
  
  ${({ rect }) => orientation(rect) === 'portrait'
? css`
    & {
      grid-row: span 2;
      grid-column: span 1;
    }
  `
: css`
    & {
      grid-row: span 1;
      grid-column: span 1;
    }
  `}
`

export default Wrapper
