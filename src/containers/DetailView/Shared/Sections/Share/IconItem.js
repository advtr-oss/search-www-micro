import styled from 'styled-components'
import { lighten } from 'polished'

const IconItem = styled.button`
  border-radius: 50%;
  padding: 8px;
  
  // Change these
  color: #fff;
  background: #00A4EB;
  
  &:hover {
    background: ${lighten(0.1, '#00A4EB')};
  }
  
  & > svg {
    fill:  #fff;
  }
`

export default IconItem
