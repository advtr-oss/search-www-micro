import styled from 'styled-components'
import { get } from '@advtr/tidy'

const Primary = styled.span`
  font-size: 14px;
  display: inline-block;
  margin-right: 5px;
  pointer-events: none;
`

const Secondary = styled.span`
  font-size: 12px;
  color: ${get('elements.foreground.subtle')};
  display: inline;
  pointer-events: none;
`

export { Primary, Secondary }
