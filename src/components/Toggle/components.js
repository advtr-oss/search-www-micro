import styled from 'styled-components'

const Checkbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
  padding: 0;
  position: absolute;
  
  margin: -1px;
  height: 1px;
  width: 1px;
`

const Thumb = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: ${({ theme }) => theme.main.misc.border.gray};
  border-radius: 50%;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: all .25s ease;
  
  .toggle--selected & {
    left: 27px;
  }
  
  .toggle--focus & {
    box-shadow: 0 0 2px 3px #0099e0;
  }
`

const Track = styled.div`
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #4d4d4d;
  transition: all .2s ease;
`

const Check = styled.div`
  position: absolute;
  width: 14px;
  height: 10px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  left: 8px;
  opacity: 0;
  transition: opacity .25s ease;
  
  .toggle--selected & {
    opacity: 1;
    transition: opacity .25s ease;
  }
`

const NotChecked = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    
    opacity: 1;
    transition: opacity .25s ease;
`

export { Checkbox, Thumb, Track, Check, NotChecked }
