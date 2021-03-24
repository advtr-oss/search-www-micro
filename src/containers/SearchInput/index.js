/**
 * SearchInput.js
 *
 * The main input container to handle the searching
 * of a location
 *
 * // TODO: Move redux if not needed here
 *
 * */

import React, { createRef, Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { IconContainer } from './components'

import { updateSearch, clearSearch } from './actions'
import { makeSelectSearchInput } from './selectors'

import Input from '../../components/Input'
import FeatherIcon from '../../components/Icons/Feather'

/**
 *
 * <-4px->Input       | X
 * */
export class SearchInput extends Component {
  input = createRef()

  constructor (props) {
    super(props)

    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleClear = this.handleClear.bind(this)

    // Maybe not final names
    this.state = {
      active: !!this.props.value,
      clear: !this.props.value
    }
  }

  componentDidMount () {
    /**
     * Removed for now, until can see a way to work this better
     * */
    // If it mounts with a value focus it
    // if (this.props.value && this.input.current) {
    //   this.input.current.focus()
    // }
  }

  handleInput (event) {
    // Pass it up the chain
    const onInput = this.props.onInput
    if (onInput) onInput(event)

    this.setState({
      clear: false,
      active: true
    })
  }

  // Just remove the clear icon if their
  // is no value.
  handleBlur (event) {
    // Pass it up the chain
    const onBlur = this.props.onBlur
    if (onBlur) onBlur(event)

    const input = this.input
    if (input.current && this.state.active) {
      this.setState({
        active: !!input.current.value,
        clear: !input.current.value
      })
    }
  }

  handleFocus (event) {
    // Pass it up the chain
    const onFocus = this.props.onFocus
    if (onFocus) onFocus(event)
  }

  // Not sure on this as of now??
  handleClear (event) {
    event.preventDefault()

    // Clear the input
    //
    // Might not be the best but will see
    //
    //
    const input = this.input
    if (input.current) {
      input.current.value = ''
      input.current.focus()
    }

    // Pass it up the chain
    const onClear = this.props.onClear
    if (onClear) onClear(event)

    // Set the state
    this.setState({
      clear: true,
      active: false
    })
  }

  render () {
    // Seems to be a workaround, no idea why it wont work normally??
    if (this.props.value && this.input.current) {
      this.input.current.value = this.props.value
    }

    return (
      <>
        <Input
          className='search--input' placeholder={this.props.placeholder}
          value={this.props.value} ref={this.input} onInput={this.handleInput}
          onBlur={this.handleBlur} onFocus={this.handleFocus}
        />
        <IconContainer active={this.state.active} onClick={this.handleClear}>
          <FeatherIcon type='x' className='search--input-cancel-icon' />
        </IconContainer>
      </>
    )
  }
}

SearchInput.defaultProps = {
  placeholder: 'Search for a city'
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string
}

const mapStateToProps = createSelector(
  makeSelectSearchInput(),
  value => ({
    value
  })
)

export function mapDispatchToProps (dispatch) {
  return {
    onInput: evt => dispatch(updateSearch(evt.target.value)),
    onClear: _ => dispatch(clearSearch()),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput)
