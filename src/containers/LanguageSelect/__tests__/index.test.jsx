/**
 * @jest-environment jsdom
 */

import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { GlobalStyle, ThemeProvider } from '@advtr/tidy'

import LanguageSelect from "../index"
import LanguageProvider from "../../LanguageProvider";

import { translationMessages, DEFAULT_LOCALE } from '../../../i18n'
import configureStore from '../../../configureStore'

const initialState = {}
const store = configureStore(initialState, history)

// Add theme provider here too, will look at moving this out and adding a generic one
const redux = (ui, opts) => render((
  <Provider store={store}>
    <ThemeProvider>
      <React.Fragment>
        <GlobalStyle />
        <LanguageProvider messages={translationMessages}>
          <React.Fragment>{ui}</React.Fragment>
        </LanguageProvider>
      </React.Fragment>
    </ThemeProvider>
  </Provider>
), opts)

describe('Language Select', function () {
  it('should render snapshot', function () {
    const { container } = redux(
      <LanguageSelect />
    )

    expect(container.firstChild).toMatchSnapshot()
  });

  it('should have default locale value selected', function () {
    const { getByText } = redux(
      <LanguageSelect />
    )

    // This should allow for it to work in CI, I hope
    const element = getByText(translationMessages[DEFAULT_LOCALE]["boilerplate.containers.locale.en"])
    expect(element.selected).toBeTruthy()
  });

  it('should allow the user to change locale', async function () {
    user.setup()

    const { getByRole, container } = redux(
      <LanguageSelect />
    )

    // Wait for it to change, should look at getting this data from the translations themselves
    await user.selectOptions(
      getByRole('combobox'),
      getByRole('option', {name: 'French'})
    )

    expect(getByRole('option', { name: 'Français' }).selected).toBeTruthy()
    expect(getByRole('option', { name: 'Anglaise' }).selected).toBeFalsy()

    // Should have the options in French
    expect(container.firstChild).toMatchSnapshot()
  });
});
