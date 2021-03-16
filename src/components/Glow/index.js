import styled, { keyframes } from 'styled-components'

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
  background: #eee;
  color: transparent;
  cursor: progress;
  display: inline-block;
`

export default Glow
