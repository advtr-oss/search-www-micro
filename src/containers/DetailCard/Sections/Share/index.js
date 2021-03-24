/**
 * Not sure I'm 100% happy with the look of this but
 * will roll with it for now
 * */
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
// import clsx from 'clsx'

import IconItem from './IconItem'
import IconGroup from './IconGroup'

import Section from '../../../../components/Section'
import FeatherIcon from '../../../../components/Icons/Feather'

const ShareSection = (props) => {
  const openSharebox = async (event) => {
    try {
      await navigator.share({
        title: 'Demo',
        url: `https://advtr.co.uk?id=${props.id}`
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleSharebox = useCallback((event) => {
    openSharebox(event)
  }, [props.id])

  return (
    <Section>
      <IconGroup>
        <IconItem className='icon'>
          <FeatherIcon type='facebook' />
        </IconItem>
        <IconItem className='icon'>
          <FeatherIcon type='twitter' />
        </IconItem>
        <IconItem className='icon'>
          <FeatherIcon type='linkedin' />
        </IconItem>
        <IconItem className='icon icon-share' onClick={handleSharebox}>
          <FeatherIcon type='send' />
        </IconItem>
      </IconGroup>
    </Section>
  )
}

ShareSection.propTypes = {
  id: PropTypes.string
}

export default ShareSection
