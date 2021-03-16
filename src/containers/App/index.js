import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'

import Theme from "../Theme";
import Fonts from "../../components/Fonts";

import TrackingProvider from "../TrackingProvider";
import GlobalStyle from '../../components/GlobalStyle';

import SearchPage from "../SearchPage";

export default function App() {
  return (
    <Theme>
      <TrackingProvider>
        <GlobalStyle />
        <Fonts />
        <Switch>
          <Route path="*" component={SearchPage} />
        </Switch>
      </TrackingProvider>
    </Theme>
  );
}
