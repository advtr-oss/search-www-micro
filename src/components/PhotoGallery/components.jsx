import styled from 'styled-components'
import { get } from '@advtr/tidy'

import isDarkMode from '../../utils/isDarkMode'

const Watermark = styled.span`
  position: absolute;
  
  right: 0;
  bottom: 0;
  padding: 2px 4px;
  
  opacity: ${isDarkMode('0.8', '0.6')};
  
  border-top-left-radius: 4px;
  color: ${isDarkMode(get('elements.foreground.inverse'), get('elements.foreground.default'))};
  background-color: ${isDarkMode(get('elements.canvas.overlay'), get('elements.canvas.subtle'))};
  
  font-size: ${get('typography.fontSize.0')};
  
  & > a {
    color: inherit;
    text-decoration: none !important;
  }
`

export { Watermark }
