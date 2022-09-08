import styled from 'styled-components'
import { media, border } from '@advtr/tidy'

const Wrapper = styled.div`
  padding: 8px;

  border-bottom: ${border.custom('muted')};

  ${media('small')} {
    padding: 16px;
  }
  
  & > .header {
    margin-top: 0;
    margin-bottom: 8px;
  }
`

export default Wrapper
