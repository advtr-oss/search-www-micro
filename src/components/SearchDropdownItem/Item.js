import styled from 'styled-components'

const Item = styled.div`
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
    width: 24px;
    height: 24px;
  }
  
  &:hover {
    background-color: #f2f4f7;
  }
`

//   &:not(:last-child) {
//   border-color: ${({ theme }) => theme.main.colors.border["gray-light"]};
// border-bottom: ${({ theme }) => theme.main.misc.borderWithColor('hsla(0,0%,59.2%,.2)')};
// }

export default Item
