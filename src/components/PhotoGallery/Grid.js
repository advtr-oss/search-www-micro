import styled from 'styled-components'

const Grid = styled.ul`
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  
  // Demo
  & > li {
    width: 25%;
    overflow: hidden;
  }
  
  .photo-gallery--item-loading {
      padding-top: 100%;
      position: relative;
  }
  
  .photo-gallery--item-loading .glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    cursor: pointer;
  }
  
  
  @media (max-width: ${props => props.theme.main.sizes.breakpoints.sm}) {
    margin: 0 -2px;
  
    & > li {
      width: calc(25% - 4px);
      
      margin-left: 2px;
      margin-right: 2px;
      margin-bottom: 4px;
      border-radius: 4px;
    }
  }
`

export default Grid
