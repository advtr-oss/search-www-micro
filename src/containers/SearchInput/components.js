import styled from 'styled-components'

/**
 * This now works, not alone but when inside another div
 * */
const IconContainer = styled.button`
  display: ${({ active }) => active ? 'block' : 'none'};
  cursor: pointer;

  position: absolute;
  height: 43px;
  // width: 50px;
  
  // Pin it to the right
  right: 0px;
  top: 0;
  
  // Line it up with the text input
  padding: 0 15px 2px 0;
  
  color: ${({ theme }) => theme.main.colors.text['gray-light']};
  border-radius: 10px;
  
  & > svg {
    width: 24px;
    height: 24px;
  }
  
  & > svg:hover {
    color: ${({ theme }) => theme.main.colors.blue};
  }
`

export { IconContainer }
