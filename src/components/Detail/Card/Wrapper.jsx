import styled, { keyframes } from "styled-components";

const fadeIn = keyframes` 
  0% {
    opacity: 0;
    //transform: scale(0);
  }
  100% {
    opacity: 1;
    //transform: scale(1);
  }
`

const Wrapper = styled.div`
  & > div:last-child {
    border-bottom: none;
  }
  
  & .section--photo, & .section--wiki {
    animation: ${fadeIn} 500ms;
  }
`

export default Wrapper
