/**
 *
 * LocaleToggle
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import SelectOption from '../SelectOption'

function Select (props) {
  let content = <option>--</option>

  // If we have items, render them
  if (props.values) {
    content = props.values.map(value => (
      <SelectOption key={value} value={value} message={props.messages[value]} />
    ))
  }

  return (
    <Wrapper value={props.value} onChange={props.onToggle}>
      {content}
    </Wrapper>
  )
}

Select.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object
}

export default Select
