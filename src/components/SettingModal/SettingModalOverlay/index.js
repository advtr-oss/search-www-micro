import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const SettingModalOverlay = styled.div`
  ${({ isOpen }) => isOpen
? css`
    display: flex;
    background-color: rgba(0,0,0,.4);
  `
: css`
    display: none;
    background-color: transparent;
  `}

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1234567890;
  justify-content: center;
  align-content: center;

  transition: background-color 2s;
`

SettingModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default SettingModalOverlay
