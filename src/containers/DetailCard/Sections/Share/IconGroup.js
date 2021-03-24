import styled from 'styled-components'

const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  
  // Only show when on devices with share
  & > .icon-share {
    display: ${() => navigator.share ? 'block' : 'none'};
  }
`

export default IconGroup
