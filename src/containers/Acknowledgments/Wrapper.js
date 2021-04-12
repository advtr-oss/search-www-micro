import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 32px auto 8px auto;
  padding: 0 20px !important;

  .header {
    display: flex;
    flex-direction: row;
    flex: auto;
  }
  
  .meta {
    position: relative;
    margin-right: 4px;
    margin-bottom: 0;
    flex: auto;
    //max-width: 80%;
  }

  .home {
    display: flex;
    
    flex-wrap: wrap;
    align-items: center;
    justify-content: end;
  }
  
  .bck-btn {
    font-weight: 600;
    background-color: #0099cc;
    border-radius: 4px;
    color: aliceblue !important;
    padding: 4px 8px;
    margin: 0;
  }

  .codeblock {
    background: #f0f0f0;
    border-radius: 6px;
    padding: 20px;
    margin: 2rem 0;
    color: #000;
    font-size: 1.2rem;
    font-family: monospace, monospace, sans-serif;
    font-weight: 400;
    letter-spacing: 0;
  }
  
  h3 {
    padding-bottom: 5px;
  }
  
  .separator {
    margin: 10px 0;
  }
`

export default Wrapper
