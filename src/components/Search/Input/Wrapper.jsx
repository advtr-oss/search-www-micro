import styled from 'styled-components'
import { media, border } from '@advtr/tidy'

// Only here to force the button to display
const Wrapper = styled.div`
  & button {
    display: flex !important;
  }

  & > div {
    border-radius: 0 0 ${border.default} ${border.default};
  }
  
  ${media('small')} { 
    & > div {
      border-radius: ${border.default};
    }
  }
`

export default Wrapper
