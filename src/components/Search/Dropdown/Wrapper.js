/**
 *
 * Containers have no styles but will overwrite the children
 * if they're generic
 *
 * */
import styled, { css } from 'styled-components'
import { get } from '@advtr/tidy'

const Wrapper = styled.div`
  & > ul {
    padding: 0;
    margin: 0;
    position: absolute;
    width: 100%;
    z-index: 1000;

    top: 100%;
    display: block;
    background-color: ${get('elements.canvas.overlay')};
    border-radius: ${get('layout.border.radius[2]')};
    overflow: hidden;

    // Shadow
    box-shadow: ${get('elements.shadow.medium')};
    
    // Force the cursor
    ${({ loading }) => loading
            ? css` 
              & * {
                cursor: default;
              }
            `
            : css`
              & * {
                cursor: pointer;
              }
            `}
    
    &:before {
      content: attr(data-title);
      display: flex;
      height: 40px;
      align-items: center;
      padding: 0 16px;
      border-bottom: 1px solid ${get('elements.border.default')};
      font-size: 12px;
      color: ${get('elements.foreground.default')};
      text-transform: uppercase;
      letter-spacing: .5px;
    }
    
    & > li:not(:last-child) {
      border-color: var(--border);
      border-bottom: 1px solid ${get('elements.border.subtle')};
    }
  }
`

export default Wrapper
