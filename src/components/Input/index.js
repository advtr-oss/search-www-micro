/**
 * Text Input
 * */
import clsx from 'clsx'
import React, { Component, forwardRef } from 'react'
import PropTypes from 'prop-types'

import ImportComponent from './Input'

/**
 * See how this goes ??
 * */
class Input extends Component {
  constructor (props) {
    super(props)

    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleInput = this.handleInput.bind(this)

    this.state = {
      empty: !props.value,
      hasFocus: false
    }
  }

  // Pass the value up the chain
  handleInput (event) {
    const onInput = this.props.onInput
    if (onInput) onInput(event)
    this.setState({
      empty: !event.target.value
    })
  }

  handleFocus (event) {
    const onFocus = this.props.onFocus
    if (onFocus) onFocus(event)
    this.setState({
      hasFocus: true
    })
  }

  handleBlur (event) {
    const onBlur = this.props.onBlur
    if (onBlur) onBlur(event)
    this.setState({
      hasFocus: false
    })
  }

  render () {
    const {
      className,
      innerRef,
      placeholder,
      value
    } = this.props

    // Old fashioned CSS
    const clsName = clsx(className,
      this.state.hasFocus && 'input--focus',
      this.props.disabled && 'input--disabled'
    )

    return (
      <ImportComponent
        className={clsName} type='text' ref={innerRef}
        aria-label={this.props['aria-label']} disabled={this.props.disabled}
        onFocus={this.handleFocus} onBlur={this.handleBlur} onInput={this.handleInput}
        defaultValue={value} placeholder={placeholder} autoComplete='off'
      />
    )
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  // name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  'aria-label': PropTypes.string
}

// Forward the ref
const InputWithRef = forwardRef((props, ref) => (
  <Input {...props} innerRef={ref} />
))

InputWithRef.propTypes = {
  disabled: PropTypes.bool,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  'aria-label': PropTypes.string
}

/**
 * @exports Input
 * */
export default InputWithRef
