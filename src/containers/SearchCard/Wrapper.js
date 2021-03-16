import styled from 'styled-components'
import { lighten } from 'polished'

import Card from '../../components/Card'

const Wrapper = styled(Card)`
  position: relative;
  order: 0;
  flex-direction: row;
  align-items: center;
  
  @media (max-width: 544px) {
    z-index: -1;
    margin-bottom: auto;
    border-radius: 0;
  }
  
  & > .search .search--input {
    padding-top: 13px;
    padding-bottom: 13px;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-radius: 10px;
    padding-left: 47px;
    font-size: 14px;
    
    height: unset;
    line-height: unset;
    
    color: ${({ theme }) => lighten(0.3, theme.main.colors.text['gray-dark'])};
  }
  
  & > .search .input--focus {
    color: ${({ theme }) => theme.main.colors.text['gray-dark']};
    
    // For when the Hamburger is here
    border-bottom: 3px solid rgb(255 65 108) !important;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  & > .search button {
    padding: 5px 15px 0 0;
  }
  
  & > span {
    color: ${({ theme }) => lighten(0.3, theme.main.colors.text['gray-dark'])};
    border: none;
    outline: none;
    background-color: transparent;
    position: absolute;
    padding: 0 0 0 12px;
    z-index: 1;
    
    font-size: 24px;
  }
`

export default Wrapper
