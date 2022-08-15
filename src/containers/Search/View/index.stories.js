import PropTypes from 'prop-types'
import { media } from '@advtr/tidy'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { View } from './index'

import { changeLocale } from '../../../providers/LanguageProvider/actions'

const Wrapper = styled.div`
  width: 100%;
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  padding: 0;
  
  ${media('small')} {
    width: 420px;
    padding: 20px;
  }
`

export default {
  title: 'Search/View',
  component: View,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    )
  ]
}

const ViewWithLocale = ({ locale, ...args }) => {
  const dispatch = useDispatch()
  const locales = ['en', 'fr']

  useEffect(() => {
    locales.includes(locale) && dispatch(changeLocale(locale))
  }, [locale])

  return <View {...args} />
}

ViewWithLocale.propTypes = {
  locale: PropTypes.string
}

export const Default = {
  render: (args) => <ViewWithLocale {...args} />,
  args: {
    locale: 'en'
  },
  argTypes: {
    locale: {
      options: ['en', 'fr'],
      control: { type: 'radio' }
    }
  }
}
