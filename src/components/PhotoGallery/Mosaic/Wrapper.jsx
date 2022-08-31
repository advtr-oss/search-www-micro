import styled from 'styled-components'
import { media } from '@advtr/tidy'

const Wrapper = styled.div`
  display: grid;
  
  grid-auto-flow: column dense;
  grid-template-rows: repeat(3, 33.3333333%);
  grid-template-columns: repeat(${({ count }) => count / 2}, 1fr);
  
  overflow: auto;
  
  width: 100%;
  height: 100%;

  ${media('small')} {
    grid-template-rows: repeat(2, 50%);
  }
`

export default Wrapper
