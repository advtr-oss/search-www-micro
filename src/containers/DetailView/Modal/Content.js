import styled, { css } from 'styled-components'

import Section from '../../../components/Section'
import Card from '../../../components/Card'

const Content = styled(Card)`
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  
  margin-bottom: 0;
  width: 100%;
  
  order: 1;
  margin-bottom: 0;
  
  ${({ hidden }) => hidden
  ? css`
    transition: max-height 0.15s ease-out;
    max-height: 20%;
  `
  : css`
    max-height: 50%;
    transition: max-height 0.15s ease-in;
    
    & > div {
      overflow-y: scroll !important;
    }
  `}
  
  & > ${Section} {
    width: 100%;
  }
  
  ${Section}:last-child {
    border-radius: 0 0 10px 10px;
    border-bottom: 0px;
  }
`

export default Content
