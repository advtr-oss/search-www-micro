import styled from 'styled-components'
import { get } from '@advtr/tidy'

// Overwrite the default input style, only since for this it's an overlay,
// although I may move all to this instead, or have canvas set by a prop
const Wrapper = styled.div`
  & > div {
    // background-color: ${get('elements.canvas.overlay')};
    // box-shadow: ${get('elements.shadow.medium')};
    // border: none;
  }
`

export default Wrapper
