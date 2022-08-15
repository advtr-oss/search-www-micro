import styled from 'styled-components'
import { get } from '@advtr/tidy'

const Wrapper = styled.div`
  height: 48px;
  padding: 0 15px;
  
  // display
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  grid-gap: 15px;
  align-items: center;
  // padding: 15px;
  cursor: pointer;
  line-height: 16px;
  
  & > svg {
    font-size: 24px;
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    background-color: ${get('elements.inverseCanvas.subtle')};
  }
`

export default Wrapper
