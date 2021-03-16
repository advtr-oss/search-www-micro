/**
 *
 * Just overwrite the generic components
 * bellow, may adjust to push them to the
 * children later on.
 *
 * */

import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  box-shadow: none;
  min-width: 0;
  border-radius: 10px;
  width: 100%;
  
  // Overwrite the search input
  .search--input {
    padding: 0 50px 0 15px;
    border: 0;
    color: ${({ theme }) => theme.main.colors.text['gray-dark']};

    border-top: 4px solid transparent;
    border-bottom: 2px solid transparent;

    line-height: 40px;
    height: 40px;
  }
  
  // onFocus
  .input--focus {
    border: 0;
    outline: none;

    // Theme colour here
    border-top: 4px solid transparent;
    border-bottom: 2px solid rgb(255 65 108) !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  
  // For both the input and dropdown
  .search--input, .search--dropdown {
      box-sizing: border-box;
      // Not sure why this?? maybe it's in the wrong place
      border-radius: 6px;
      background-color: ${({ theme }) => theme.main.colors.backgrounds.white} !important;
      font-family: Rubik,sans-serif;
      width: 100%;
  }
  
`

export default Wrapper
