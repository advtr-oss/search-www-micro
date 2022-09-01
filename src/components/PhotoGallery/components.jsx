import styled from 'styled-components'
import { get } from '@advtr/tidy'

const Watermark = styled.span`
  position: absolute;
  
  right: 0;
  bottom: 0;
  padding: 2px 4px;
  
  opacity: 0.8;
  
  color: ${get('elements.foreground.inverse')};
  background-color: ${get('elements.canvas.overlay')};
  
  font-size: ${get('typography.fontSize.0')};
  
  & > a {
    color: inherit;
    text-decoration: none !important;
  }
`

export { Watermark }
