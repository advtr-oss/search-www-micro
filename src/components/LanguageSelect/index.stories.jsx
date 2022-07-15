import React from 'react'

import ADVLanguageSelect from '../LanguageSelect'
import LanguageProvider from '../../providers/LanguageProvider'

import { translationMessages } from '../../i18n'

export default {
  title: 'Select/Language',
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
