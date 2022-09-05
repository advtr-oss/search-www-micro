import styled from 'styled-components'
import { get, darken } from '@advtr/tidy'

const Wrapper = styled.div`
  a {
    padding-left: 4px;
    
    text-decoration: none;
    color: ${get('elements.levels.active.foreground')};
    
    &:hover {
      color: ${darken(get('elements.levels.active.foreground'), 0.2)};
      text-decoration: underline;
    }
  }
  
  .feedback {
    margin: 8px 0 0 auto;
  }
`

export default Wrapper
