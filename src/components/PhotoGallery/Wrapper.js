import styled from 'styled-components'
import { lighten } from 'polished'

const Wrapper = styled.div`
  position: relative;

  & > .watermark {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2px 4px;
    
    opacity: 0.8;
    font-size: 11px;
    
    color: #fff;
    background: ${lighten(0.1, '#2f363d')};
    
    @media (max-width: ${props => props.theme.main.sizes.breakpoints.sm}) {
      margin: 4px 0px;
      border-bottom-right-radius: 4px;
    }
  }
`

export default Wrapper
