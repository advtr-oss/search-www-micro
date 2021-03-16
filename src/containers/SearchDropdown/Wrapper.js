/**
 *
 * Containers have no styles but will overwrite the children
 * if they're generic
 *
 * */
import styled from 'styled-components'

const Wrapper = styled.div`
  // Overwrite the style
  .search--dropdown {
    padding: 0;
    margin: 0;
    position: absolute;
    width: 100%;
    z-index: 1000;
  
    top: 100%;
    display: block;
    background-color: inherit; // So this can be added later
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    overflow: hidden;
    
    // Shadow
    box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
  }
  
  // User-friendly prompt
  & > ul:before {
    content: attr(data-title);
    display: flex;
    height: 40px;
    align-items: center;
    padding: 0 15px;
    border-bottom: 1px solid #d3dae0;
    font-size: 11px;
    color: #818181;
    text-transform: uppercase;
    letter-spacing: .5px;
  }
  
  // Add border
  & > ul li:not(:last-child) {
    border-color: var(--border);
    border-bottom: 1px solid hsla(0,0%,59.2%,.2);
  }
`

export default Wrapper
