import styled, { css } from 'styled-components'
import { Glow } from '@advtr/tidy'

const Image = styled.img`
  ${({ isLoading }) => isLoading && css`
    display: none;
  `}
  
  //flex-shrink: 0;
  //min-width: 100%;
  //min-height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
  cursor: pointer;
`

const LoadingSpan = styled(Glow)`
  position: absolute;
  
  background: ${({ background }) => background};
  
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export { Image, LoadingSpan }
