import styled from 'styled-components'
import { get } from '@advtr/tidy'

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  align-content: center;

  border: none;
  color: inherit;
  cursor: pointer;
  background-color: inherit;
  
  font-family: ${get('typography.fontFamily.mono')};
  font-size: ${get('typography.fontSize.0')};
  
  & svg {
    width: ${get('typography.fontSize.0')};
    height: ${get('typography.fontSize.0')};
  }
  
  & span {
    padding-left: 8px;
  }
`

export default Wrapper
