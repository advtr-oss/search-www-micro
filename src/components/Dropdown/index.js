/**
 * Generic dropdown
 *
 * TODO: Make this accessible friendly
 * */

import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import List from './List'
import DropdownItem from '../DropdownItem'

function Selected (name, value, index) {
  this.type = 'dropdown'
  this.name = name
  this.value = value
  this.index = index
}

const Dropdown = (props) => {
  const {
    component,
    className,
    name,
    onSelect,
    role,
    values,
    ...rest
  } = props
  const Item = component || DropdownItem

  const handleSelect = (idx) => (event) => {
    event.preventDefault()
    if (onSelect) onSelect(new Selected(name || className || 'dropdown', values[idx], idx))
  }

  return (
    <List className={clsx(className)} role={role} {...rest}>
      {values.map((el, idx) => (
        <li key={idx} role='option' tabIndex='-1' onClick={handleSelect(idx)}>
          {typeof el === 'string' ? <Item value={el} /> : <Item {...el} />}
        </li>
      ))}
    </List>
  )
}

Dropdown.defaultProps = {
  role: 'listbox'
}

Dropdown.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  'data-title': PropTypes.string,
  name: PropTypes.string,
  onSelect: PropTypes.func,
  role: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]))

}

export default Dropdown
