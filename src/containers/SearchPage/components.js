import styled from 'styled-components'

const CardGroup = styled.div`
  box-sizing: border-box;
  position: absolute;
  padding: 20px;
  pointer-events: none;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
  
  @media (min-width: 768px)  {
    width: 420px;
    overflow-y: auto;
    padding-right: 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

export { CardGroup }
