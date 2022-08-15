// import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from '@advtr/tidy'

import Wrapper from './Wrapper'

import { Loading } from './Item/Loading'
import { Search } from './Item/Search'

const loadingValues = Array(2).fill('loading...')

const _Dropdown = ({ values, title, isLoading, onSelectionChange }) => {
  const commonProps = {
    'aria-label': title,
    title
  }

  // Change so loading can be a default value and if we get values
  // we move onto the SearchItem view
  if (isLoading && values.length === 0) {
    return (
      <Wrapper adv={{ canvas: 'overlay', shadow: 'medium' }} isLoading>
        <Dropdown values={loadingValues} rendered={Loading} {...commonProps} />
      </Wrapper>
    )
  }

  return (
    <Wrapper adv={{ canvas: 'overlay', shadow: 'medium' }}>
      <Dropdown values={values} rendered={Search} onSelectionChange={onSelectionChange} {...commonProps} />
    </Wrapper>
  )
}

_Dropdown.displayName = 'Search.Dropdown'

_Dropdown.defaultProps = {
  isLoading: false,
  title: 'Search Results'
}

_Dropdown.propTypes = {
  title: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export { _Dropdown as Dropdown }
