import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
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

  .search--input:focus {
    border: 0;
    outline: none;

    // Theme colour here
    border-top: 4px solid transparent;
    border-bottom: 2px solid rgb(255 65 108);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export default Wrapper
