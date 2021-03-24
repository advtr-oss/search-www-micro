import styled from 'styled-components'

import Section from '../../../../components/Section'

const Wrapper = styled(Section)`
  padding: 0px;
  padding-bottom: 15px;
  
  // Hide this on computers
  & > h5 {
    display: none;
  }
  
  @media (max-width: ${props => props.theme.main.sizes.breakpoints.sm}) {
    padding: 15px 20px;
    
    // Display when on mobile
    & > h5 {
      display: block;
      margin-bottom: 12px;
    }
  }
`

export default Wrapper
