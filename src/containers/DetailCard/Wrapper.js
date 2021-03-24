import styled from 'styled-components'

import Section from '../../components/Section'
import Card from '../../components/Card'

const Wrapper = styled(Card)`
  order: 1;
  margin-bottom: 0;
  
  & > div {
    border-radius: 10px;
  }
  
  ${Section}:last-child {
    border-radius: 0 0 10px 10px;
    border-bottom: 0px;
  }
`

export default Wrapper
