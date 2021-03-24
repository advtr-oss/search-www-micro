/**
 * Should only contain children styles
 * */

import styled from 'styled-components'

const Wrapper = styled.div`
  & > h4  {
    margin-top: 4px;
    color: ${({ theme }) => theme.main.colors.text['gray-light']};
  }
`

export default Wrapper
