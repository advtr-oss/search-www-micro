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
  
  cursor: pointer;
  line-height: 16px;
`

export default Item
