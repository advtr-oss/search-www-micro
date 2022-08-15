/**
 *
 * Containers have no styles but will overwrite the children
 * if they're generic
 *
 * */
import styled, { css } from 'styled-components'
import { get, border, decorator, withThemeProps } from '@advtr/tidy'
import PropTypes from 'prop-types'

const adv = (ctx) => css`
  & {
    ${ctx.adv?.foreground && css`color: ${get(`elements.foreground.${ctx.adv?.foreground}`)({ theme: ctx.theme })} !important;`}
    ${ctx.adv?.canvas && css`background-color: ${ctx.adv?.canvas && get(`elements.canvas.${ctx.adv?.canvas}`)({ theme: ctx.theme })} !important;`}
    
    ${ctx.adv?.shadow && css`box-shadow: ${ctx.adv?.shadow && get(`elements.shadow.${ctx.adv?.shadow}`)({ theme: ctx.theme })} !important;`}
    ${ctx.adv?.border && css`border: ${ctx.adv?.border && border.custom(ctx.adv?.border)({ theme: ctx.theme })} !important;`} 
  }
`

const Wrapper = styled.div`
  & > ul {
    ${adv};
    
    display: block;
    
    padding: 0;
    margin: 0;
    //position: absolute;
    width: 100%;
    z-index: 1000;

    top: 100%;
    
    border-radius: ${get('layout.border.radius[2]')};
    overflow: hidden;
    
    // Force the cursor
    ${({ isLoading }) => isLoading
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

Wrapper.propTypes = decorator([
  withThemeProps,
  {
    isLoading: PropTypes.bool
  }
])

export default Wrapper
