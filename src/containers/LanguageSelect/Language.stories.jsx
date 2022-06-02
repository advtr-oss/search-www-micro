import React from 'react'

import ADVLanguageSelect from "../LanguageSelect"
import LanguageProvider from "../LanguageProvider";

import { translationMessages } from '../../i18n'

export default {
  title: 'UI/LanguageSelect',
  component: ADVLanguageSelect
}

const Template = () => {
  return (
    <LanguageProvider messages={translationMessages}>
      <ADVLanguageSelect />
    </LanguageProvider>
  )
}

export const LanguageSelect = Template.bind({})
LanguageSelect.args = {}
