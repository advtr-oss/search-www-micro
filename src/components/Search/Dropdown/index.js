// import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import { Dropdown as InternalDropdown } from '../../Dropdown'

import { Loading } from './Item/Loading'
import { Search } from './Item/Search'

const loadingValues = Array(2).fill('loading...')

export const Dropdown = ({ values, title, loading, onSelect, ...props }) => {
  // Change so loading can be a default value and if we get values
  // we move onto the SearchItem view
  if (loading && values.length === 0) {
    return (
      <Wrapper>
        <InternalDropdown data-title={title} values={loadingValues}
                          component={Loading} onSelect={onSelect} />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <InternalDropdown data-title={title} values={values}
                        component={Search} onSelect={onSelect} />
    </Wrapper>
  )
}

Dropdown.displayName = 'Search.Dropdown'

Dropdown.defaultProps = {
  loading: false,
  title: 'Search Results'
}

Dropdown.propTypes = {
  title: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  loading: PropTypes.bool
}
