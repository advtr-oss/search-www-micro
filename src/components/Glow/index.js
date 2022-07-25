import styled, { keyframes } from 'styled-components'
import { get } from '@advtr/tidy'

const glow = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

const Glow = styled.span`
  animation: ${glow} 1.5s ease-in-out infinite;
  background: ${get('elements.foreground.subtle')};
  color: transparent;
  cursor: progress;
  display: block;
  
  width: 100%;
  height: 100%;
`

export { Glow }
