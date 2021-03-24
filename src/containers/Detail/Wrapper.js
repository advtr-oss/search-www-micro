import styled from 'styled-components'

import CardGroup from '../../components/CardGroup'

const Wrapper = styled(CardGroup)`
  pointer-events: all;
  z-index: 1001;
  
  
  @media (min-width: ${props => props.theme.main.sizes.breakpoints.sm}) {
    width: 420px;
    overflow-y: auto;
    padding: 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  @media (max-width: 544px) {
    margin: 0;
    border-radius: 0;
  }
  
  @media (max-width: 744px) {
    width: 100%;
  }
`

export default Wrapper
