import React from 'react'
import PropTypes from 'prop-types'

import { Item } from './Item'
import Wrapper from './Wrapper'

function Selected (name, value, index) {
  this.type = 'dropdown'
  this.name = name
  this.value = value
  this.index = index
}

const Dropdown = ({ onSelect, name, className, values, role, component, ...props }) => {
  const Component = component || Item

  const handleSelect = (idx) => (event) => {
    event.preventDefault()
    onSelect && onSelect(new Selected(name || className || 'dropdown', values[idx], idx))
  }

  return (
    <Wrapper className={className} role={role} {...props}>
      {values.map((el, idx) => (
        <li key={idx} role='option' tabIndex='-1' onClick={handleSelect(idx)}>
          {typeof el === 'object' ? <Component {...el} /> : <Component value={el} /> }
        </li>
      ))}
    </Wrapper>
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
  ])).isRequired
}

export { Dropdown, Item }
