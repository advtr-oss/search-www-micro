import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import Dropdown from '../../components/Dropdown'
import SearchDropdownItem from '../../components/SearchDropdownItem'
import LoadingDropdownItem from '../../components/LoadingDropdownItem'

// Overwrite this if we want more
const loadingValues = Array(2).fill('loading...')

export const SearchDropdown = (props) => {
  const {
    title,
    values,
    onSelect,
    loading
  } = props

  const clsName = clsx(
    'search--dropdown',
    loading && 'search--dropdown-loading'
  )

  // Show something on load
  if (loading) {
    return (
      <Wrapper>
        <Dropdown
          className={clsName} values={loadingValues}
          component={LoadingDropdownItem} data-title={title}
        />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Dropdown
        className={clsName} values={values} component={SearchDropdownItem}
        onSelect={onSelect} data-title={title}
      />
    </Wrapper>
  )
}

SearchDropdown.defaultProps = {
  loading: false,
  title: 'Search Results'
}

SearchDropdown.propTypes = {
  title: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

// TODO: Redux
export default SearchDropdown
