import styled from 'styled-components'
import { get } from '@advtr/tidy'

import isDarkMode from '../../../../../utils/isDarkMode'

const Primary = styled.span`
  font-size: 14px;
  display: inline-block;
  margin-right: 5px;
  pointer-events: none;
`

// `elements.foreground.subtle` fails AXE on overlay background so will adjust for this
const kAXECompliantDarkFont = get('scheme.gray.2')

const Secondary = styled.span`
  font-size: 12px;
  color: ${isDarkMode(kAXECompliantDarkFont, get('elements.foreground.subtle'))};
  display: inline;
  pointer-events: none;
`

export { Primary, Secondary }
