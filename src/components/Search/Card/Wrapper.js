import styled from 'styled-components'
import { get, media, border, alpha } from '@advtr/tidy'
// import Input from '@advtr/tidy/dist/cjs/components/Search/Wrapper'
import Dropdown from '../Dropdown/Wrapper'
import isDarkMode from '../../../utils/isDarkMode'

const Wrapper = styled.div`
  display: grid;
  gap: 0;


  ${media('small')} {
    gap: 16px 0;

    & .search--input {
      border-radius: ${border.default};
    }
  }
  
  &:focus-within {
    & > .search--input > div {
      border-radius: 0;
      border-bottom: ${border.style};
      box-shadow: none !important;

      ${media('small')} {
        border-radius: ${border.default};
        border-bottom: none;

        box-shadow: ${get('elements.shadow.medium')} !important;
      }
    }

    & > .search--dropdown > ul {
      border-radius: 0 0 ${border.default} ${border.default};
      box-shadow: 0 3px 6px -6px ${isDarkMode(get('scheme.black'), alpha(get('scheme.gray.4'), 0.15))} !important;
  
      ${media('small')} {
        border-radius: ${border.default};
        box-shadow: ${get('elements.shadow.medium')} !important;
      }
    }
  }
`

export default Wrapper
