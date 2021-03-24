/**
 * Slightly customisable toggle.
 *
 * Passing a icon to <Toggle icons={...} /> will
 * populate the toggle to make them more interesting
 * */
import clsx from 'clsx'
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import { Check, NotChecked, Checkbox, Thumb, Track } from './components'

function Select (isSelected, name) {
  return {
    name: name,
    value: isSelected,
    type: 'checkbox'
  }
}

class Toggle extends Component {
  constructor (props) {
    super(props)

    this.input = createRef()
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.previouslyChecked = !(!props.checked && !props.defaultChecked)

    this.state = {
      checked: !(!props.checked && !props.defaultChecked),
      hasFocus: false
    }
  }

  // Not sure on this
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({ checked: !!this.props.checked })
    }
  }

  handleClick (event) {
    const ref = this.input
    if (event.target !== ref) {
      this.previouslyChecked = ref.checked
      event.preventDefault()
      ref.focus()
      ref.click()

      return
    }

    // Grab the ref or the prop
    const checked = this.props.hasOwnProperty('checked') ? this.props.checked : ref.checked
    this.setState({
      checked
    }, () => {
      this.props.onChange && this.props.onChange(new Select(checked, this.props.name))
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
      icons
    } = this.props

    // Old fashioned CSS
    const clsName = clsx(className,
      this.state.checked && 'toggle--selected',
      this.state.hasFocus && 'toggle--focus',
      this.props.disabled && 'toggle--disabled'
    )

    return (
      <Wrapper onClick={this.handleClick} className={clsName}>
        <Track>
          <Check>
            {icons && icons.checked ? icons.checked : null}
          </Check>
          <NotChecked>
            {icons && icons.unchecked ? icons.unchecked : null}
          </NotChecked>
        </Track>
        <Thumb checked={this.state.checked} />
        <Checkbox
          type='checkbox' aria-label={this.props['aria-label']} ref={(ref) => this.input = ref}
          onFocus={this.handleFocus} onBlur={this.handleBlur} disabled={this.props.disabled}
        />
      </Wrapper>
    )
  }
}

Toggle.defaultProps = {

}

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  'aria-label': PropTypes.string,
  icons: PropTypes.shape({
    checked: PropTypes.node,
    unchecked: PropTypes.node
  })
}

export default Toggle
