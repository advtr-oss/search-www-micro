import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: hidden;
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 400px;
  max-width: 100%;

  height: 400px;
  max-height: 100%;
  
  background: white;
  box-shadow: ${({ theme }) => theme.main.misc.shadow.medium};
  
  border-radius: 24px;
  
  & > div {
    width: 100%;
  }
  
  
  .setting-modal_header, .setting-modal_body {
    padding: 0 16px;
  }
  
  & > div {
    border-bottom: ${({ theme }) => theme.main.misc.border};
  }
  
  & > div:last-child {
    border-bottom: 0;
  }
`

export default Wrapper
