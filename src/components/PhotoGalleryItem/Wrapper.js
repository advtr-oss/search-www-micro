import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 100%;
  position: relative;
  
  & > img, & > .photo-gallery--item-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    cursor: pointer;
  }
  
  // Maybe some opacity to hide this a little
  > .photo-gallery--item-background {
    background-color: ${({ color }) => color};
  }
  
  .display-none {
    display: none;
  }
`

export default Wrapper
