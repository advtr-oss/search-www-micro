/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import ThemeSwitch from "../index";

import { Theme } from "../../../containers/Theme";

const theme = (ui, opts) => render((
  <Theme>
    <>{ui}</>
  </Theme>
), opts)

describe('ThemeSwitch', function () {
  it('should render switch', function () {
    const { container } = theme(<ThemeSwitch />)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('should have default theme value', function () {
    theme(<ThemeSwitch />)

    const checkbox = screen.getByLabelText('theme-toggle')
    expect(checkbox.checked).toBeFalsy()
  });

  it('should fire click event', function () {
    const { container } = theme(<ThemeSwitch />)
    fireEvent.click(screen.getByLabelText('theme-toggle'))

    expect(container.firstChild).toMatchSnapshot()
  });
});
